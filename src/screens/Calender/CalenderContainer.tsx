import React, { useEffect, useState } from 'react';
import { ServerEvent } from '../../api/ServerInterfaces';
import { fetchData } from '../../api/APIs';
import CalenderView from './CalenderView';
import { AgendaItemProps, EventProps, MarkedDateProps } from './CalendarTypes';

const CalenderContainer = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({});
  const [agendaItem, setAgendaItems] = useState<AgendaItemProps>({});
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const path = '/calendar/aaaaaa';
        const serverData = await fetchData<ServerEvent[]>(path);
        const data = serverData.map((item) => ({
          id: item.id,
          userId: item.userId,
          groupId: item.groupId,
          title: item.title,
          memo: item.memo,
          startTime: item.dateStart,
          endTime: item.dateEnd,
          term: item.term,
          participants: item.participants,
        }));

        const newAgendaItems: AgendaItemProps = {};
        const newMarkedDates: MarkedDateProps = {};
  
        data.forEach(event => {
          const eventDate = event.startTime.split('T')[0]; // 날짜 부분만 추출
  
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
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };
    fetchEvents();
  }, []); 
  
  return (
    <CalenderView markedDates={markedDates} agendaItems={agendaItem}/>
  );
}

export default CalenderContainer;
