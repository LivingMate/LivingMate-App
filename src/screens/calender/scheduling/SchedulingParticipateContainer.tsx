import React, { useEffect, useState } from 'react';
import SchedulingParticipateView from './SchedulingParticipateView';
import { useAuth } from '../../../auth/AuthContext';
import { getData } from '../../../api/APIs';

interface SchedulingParticipateContainerProps {
  setIsScheduling: () => void;
}

interface SchedulingProps {
  id: number,
  groupId: number,
  title: string,
  dates: string[];
  startTime: string,
  endTime: string,
}

const SchedulingParticipateContainer: React.FC<SchedulingParticipateContainerProps> = ({setIsScheduling}) => {
  const [title, setTitle] = useState<string>('title');
  const [dates, setDates] = useState<string[]>(['2024-02-23', '2024-02-24', '2024-02-25', '2024-02-26']);
  const [data, setData] = useState<SchedulingProps>();

  const {userToken} = useAuth();

  const getSchedulingParticipateData = async () => {
    try {
      const path = '/calendar/schedule/schedule';
      const serverData = await getData<SchedulingProps>(path, userToken);
      // 서버 데이터를 클라이언트의 데이터 구조로 변환
      console.log('serverData:', serverData);
      setData(serverData);
      console.log('/schedule, ',data);
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

  useEffect(() => {
    getSchedulingParticipateData();
  }, []); 

  return (
    <SchedulingParticipateView setIsScheduling={setIsScheduling}/>
  );
};

export default SchedulingParticipateContainer;
