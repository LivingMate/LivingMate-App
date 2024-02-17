import React, { useEffect, useState } from 'react';
import RegisterEventModalView from './RegisterEventModalView';
import { deleteData, patchData, postData } from '../../api/APIs';
import { Alert } from 'react-native';
import { useAuth } from '../../auth/AuthContext';
import { EventProps, modeType } from './types';

interface RegisterEventModalContainerProps {
  mode: modeType;
  isVisible: boolean;
  editingEvent: EventProps | null;
  onClose: () => void;
  getEvents: () => void;
}

const RegisterEventModalContainer: React.FC<RegisterEventModalContainerProps> = ({ mode, getEvents, editingEvent, isVisible, onClose }) => {
  console.log('RegisterBudget mode:', mode); 

  const { userToken } = useAuth();

  const [id, setId] = useState<string>('');

  useEffect(() => {
    if(editingEvent) setId(editingEvent.id.toString());
    console.log('RegisterBudgetModal id:', id);
  }, [editingEvent]);

  const addEvent = async (title: string, start: string, end: string, term: number, participants: string[], memo: string) => {
      // JSON 데이터 생성
      const newData = {
        title: title, 
        memo: memo,
        dateStart: start,
        dateEnd: end,
        term: term,
        participants: participants
      };
      console.log('post Event Data will be sended: ', newData);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = ''; // 요청을 보낼 경로
        const response = await postData<typeof newData, any>(path, newData, userToken); // 여기서 응답 데이터 타입은 실제 응답에 맞게 수정해야 합니다.
  
        console.log('addEvent 서버 응답:', response);
        onClose(); // 등록 버튼 클릭 후 모달 닫기
        getEvents();
      } catch (error) {
        console.error('addEvent 서버 요청 실패:', error);
      }
  };
  
  const editEvent = async (title: string, start: string, end: string, term: number, participants: string[], memo: string) => {
      try {
          // JSON 데이터 생성
        const newData = {
          title: title, 
          memo: memo,
          dateStart: start,
          dateEnd: end,
          term: term,
          participants: participants
        };
        console.log('editEvent data will be sended: ', newData);
        const path = '';
        const response = await patchData(path, newData, userToken); // 업데이트할 데이터를 전달합니다.
        console.log('editEvent 서버 응답:', response);
        onClose(); // 등록 버튼 클릭 후 모달 닫기
        getEvents();
      } catch (error) {
        console.error('editEvent 서버 요청 실패:', error);
      }
  };

  const deleteEvent = async () => {
    try {
      const path = '/'+id;
      await deleteData(path, userToken);
      console.log(id, 'deleteEvent 완료');
      onClose();
      getEvents();
    } catch (error) {
      console.error('deleteEvent 실패:', error);
    }
  };

  const regesterEvent = mode === 'edit' ? editEvent : addEvent;

  return (  
   <RegisterEventModalView 
    mode={mode} 
    isVisible={isVisible} 
    onClose={onClose}
    regesterEvent={regesterEvent}
    deleteEvent ={deleteEvent}
    editingEvent = {editingEvent}
    />
  );
};

export default RegisterEventModalContainer;