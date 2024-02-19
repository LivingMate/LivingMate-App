import React, { useEffect, useState } from 'react';
import { ServerEvent } from '../../api/ServerInterfaces';
import { getData } from '../../api/APIs';
import CalenderView from './CalenderView';
import { AgendaItemProps, EventProps, MarkedDateProps, SchedulingProps } from './types';
import { useAuth } from '../../auth/AuthContext';

const test = {"dates": ["2024-02-26", "2024-02-27"], "endTime": "17:00", "groupId": "CDIR8FUQ", "id": 3, "startTime": "04:30", "title": "Third"}

const CalenderContainer = () => {
  
  const { userToken } = useAuth();
  
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({});
  const [agendaItem, setAgendaItems] = useState<AgendaItemProps>({});

  const [schedulingData, setSchedulingData] = useState<SchedulingProps>();
  const [isScheduling, setIsScheduling] = useState<boolean>(false);
  
  const getEvents = async () => {
    try {
      const path = '/calendar';
      const serverData = await getData<ServerEvent[]>(path, userToken);
      const data = serverData.map((item) => ({
        id: item.id,
        userId: item.userId,
        groupId: item.groupId,
        title: item.title,
        memo: item.memo,
        start: item.dateStart,
        end: item.dateEnd,
        term: item.term,
        participants: item.participants,
      }));

      const newAgendaItems: AgendaItemProps = {};
      const newMarkedDates: MarkedDateProps = {};

      data.forEach(event => {
        const eventDate = event.start.split('T')[0]; // 날짜 부분만 추출

        // AgendaItem 업데이트
        if (!newAgendaItems[eventDate]) {
          newAgendaItems[eventDate] = {};
        }
        newAgendaItems[eventDate][event.id] = event;

        // MarkedDateProps 업데이트 (중복된 날짜를 피하기 위해 조건 확인)
        if (!newMarkedDates[eventDate]) {
          newMarkedDates[eventDate] = { marked: true };
        }
      });

      setAgendaItems(newAgendaItems);
      setMarkedDates(newMarkedDates);
    } catch (error) {
      console.error('Failed to get events:', error);
    }
  };

  const getSchedulingParticipateData = async () => {
    try {
      const path = '/calendar/schedule/schedule';
      const serverData = await getData<SchedulingProps[]>(path, userToken);
      // 서버 데이터를 클라이언트의 데이터 구조로 변환
      console.log('/schedule get serverData:', serverData);
      if(serverData.length && serverData.length > 0) {
        setSchedulingData(serverData[0]);
        setIsScheduling(true);
      }
    } catch (error) {
        if (error instanceof TypeError) {
          // TypeError 타입의 에러 처리
          console.error('posts TypeError:', error);
        } else if (error instanceof ReferenceError) {
          // ReferenceError 타입의 에러 처리
          console.error('posts ReferenceError:', error);
        } else {
          // 다른 모든 에러 처리
          console.error('posts Unknown Error:', error);
        }
    }
  };

  const handleIsScheduling = () => {
    setIsScheduling(current => !current);
  }

  useEffect(() => {
    getEvents();
  }, []); 

  useEffect(() => {
    getSchedulingParticipateData();
  }, [isScheduling]); 
  
  return (
    <CalenderView markedDates={markedDates} agendaItems={agendaItem} schedulingData={schedulingData} isScheduling={isScheduling} getEvents={getEvents} handleIsScheduling={handleIsScheduling}/>
  );
}

export default CalenderContainer;
