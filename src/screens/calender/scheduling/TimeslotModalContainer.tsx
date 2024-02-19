import React, { useEffect, useState } from 'react';
import TimeslotModalView from './TimeslotModalView';
import { deleteData } from '../../../api/APIs';
import { useAuth } from '../../../auth/AuthContext';
import { DateTableProps, SchedulingProps, TimeSlotProps } from '../types';
import { createDateTables } from './TimeSlotUtils';

interface TimeslotModalContainerProps {
  isVisible: boolean;
  onClose: () => void;
  schedulingData: SchedulingProps,
  setIsScheduling: () => void,
}


const TimeslotModalContainer: React.FC<TimeslotModalContainerProps> = ({ isVisible, onClose, schedulingData, setIsScheduling }) => {
  
  const { userToken } = useAuth();

  const schedulingId = schedulingData.id

  const [dateTable, setDateTable] = useState<DateTableProps>({});

  console.log('schedulingData.dates:', schedulingData.dates);

  const initialTable = createDateTables(schedulingData.dates, schedulingData.startTime, schedulingData.endTime);

  const handleCancel = () => {
    onClose();
  };

  const deleteScheduling = async () => {
    try {
      const path = '/calendar/delete/schedule/'+schedulingId;
      await deleteData(path, userToken);
      console.log(schedulingId, 'delete scheduling 완료');
      onClose();
      setIsScheduling();
    } catch (error) {
      console.error('delete scheduling 실패:', error);
    }
  };

  useEffect(() => {
    console.log('timeslots');
    setDateTable(initialTable);
    console.log('DateTable: ', dateTable);
  }, []); 
  
  return (  
    <TimeslotModalView isVisible={isVisible} onClose={handleCancel} deleteScheduling={deleteScheduling} schedulingData={schedulingData}/>
    
  );
};

export default TimeslotModalContainer;
