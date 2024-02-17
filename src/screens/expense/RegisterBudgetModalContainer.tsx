import React, { useState } from 'react';
import RegisterBudgetModalView from './RegisterBudgetModalView';
import { postData, patchData, deleteData } from '../../api/APIs';
import { Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
//import { ExpenseStackParamList } from './ExpenseStackNavigator';
import { useBudgetContext } from '../../context/ExpenseContext';
import { useAuth } from '../../auth/AuthContext';

interface RegisterBudgetModalContainerProps {
  mode: 'create' | 'edit';
  isVisible: boolean;
  getBudgets: () => void;
  id?: number; // edit 모드일 때만 
  onClose: () => void;
}

const RegisterBudgetModalContainer: React.FC<RegisterBudgetModalContainerProps> = ({ mode, getBudgets, isVisible, id, onClose}) => {

  console.log('RegisterBudget mode:', mode); 

  const { userToken } = useAuth();

  const addBudget = async (content: string, price: number, category: string, subCategory: string) => {
    if (content !== '' && price !== -1 && category!=='' && subCategory!=='') {
      // JSON 데이터 생성
      const newBudget = {
        spendingName: content,
        spendings: price,
        category: category,
        subCategory: subCategory,
      };
      console.log('budget Data will be sended: ', newBudget);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = '/budget'; // 요청을 보낼 경로
        const response = await postData<typeof newBudget, any>(path, newBudget, userToken); // 여기서 응답 데이터 타입은 실제 응답에 맞게 수정해야 합니다.
  
        console.log('add Budget 서버 응답:', response);
        onClose(); // 등록 버튼 클릭 후 모달 닫기
        getBudgets(); // 게시글 목록 새로고침
      } catch (error) {
        console.error('add Budget 서버 요청 실패:', error);
      }
    } else {
      Alert.alert(
        '',
        '내용을 전부 입력하세요',
        [{ text: '확인' }],
        { cancelable: false }
      );
    }
  };
  
  const editBudget = async (content: string, price: number, category: string, subCategory: string) => {
    if (content !== '' && price !== -1 && category!=='' && subCategory!=='') {
      try {
        // 서버에 업데이트 요청을 보냅니다.
        const updateBudget = {
          spendingName: content,
          spendings: price,
          category: category,
          subCategory: subCategory,
        };
      console.log('budget Data will be sended: ', updateBudget);

        const path = `/budget/update/${id}`;
        const response = await patchData(path, updateBudget, userToken); // 업데이트할 데이터를 전달합니다.
        console.log('edit budget 서버 응답:', response);

        onClose(); // 등록 버튼 클릭 후 모달 닫기
        getBudgets(); // 게시글 목록 새로고침
                
      } catch (error) {
        console.error('edit budget 서버 요청 실패:', error);
      }
    } else {
      Alert.alert(
        '',
        '수정사항이 없으면 취소를 눌러주세요',
        [{ text: '확인' }],
        { cancelable: false }
      );
    }
  };
/*
  const deleteBudget = async (): Promise<void> => {
    try {
      const path = `/budget/${id}`;
      await deleteData<void>(path); // deleteData 함수를 호출하여 DELETE 요청을 보냅니다.
      console.log(`Post with ID ${id} deleted successfully.`);
      onClose(); // 삭제 버튼 클릭 후 모달 닫기
      fetchBudgets(); // 게시글 목록 새로고침
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
      // DELETE 요청 실패를 적절히 처리하세요
      // 여기에는 예를 들어 사용자에게 오류 메시지를 보여주는 등의 로직을 추가할 수 있습니다.
      throw error;
    }
  };
*/
  const regesterBudget = mode === 'edit' ? editBudget : addBudget;

  return (
    <RegisterBudgetModalView 
      mode={mode} 
      onClose={onClose} 
      isVisible={isVisible} 
      regesterBudget={regesterBudget}/>
  );
};

export default RegisterBudgetModalContainer;
