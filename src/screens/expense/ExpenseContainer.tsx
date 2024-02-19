import React, { useEffect, useState } from 'react';
import { getData } from '../../api/APIs';
import { ServerBudget, ServerCurrentExpenseData } from '../../api/ServerInterfaces';
import ExpenseView from './ExpenseView';
import { useAuth } from '../../auth/AuthContext';
import { BudgetProps, MateSpendingProps } from './types';

const ExpenseContainer = () => {

  const { userToken } = useAuth();
  const [budgets, setBudgets] = useState<BudgetProps[]>([]);
  const [groupSum, setGroupSum] = useState<number>(0);
  const [groupAvg, setGroupAvg] = useState<number>(0);
  const [mateSpendings, setMateSpendings] = useState<MateSpendingProps[]>([]);
  
  const getBudgets = async () => {
    try {
      const path = '/budget';
      const serverData = await getData<ServerBudget[]>(path, userToken);
      
      console.log('getBudgets', serverData)
      // 서버 데이터를 클라이언트의 데이터 구조로 변환
      const data = serverData.map((item) => ({
        id: item.id,
        userId: item.userId, 
        userName: item.userName,
        userColor: item.userColor,
        groupId: item.groupId,
        content: item.spendingName,
        price: item.spendings,
        category: item.category,
        subCategory: item.subCategory,
        date: item.createdAt.substring(0,10),
      }));
      setBudgets(data);
      console.log('setBudgets', data);
      getCurrentExpenseData();
    } catch (error) {
        if (error instanceof TypeError) {
          // TypeError 타입의 에러 처리
          console.error('budgets TypeError:', error);
        } else if (error instanceof ReferenceError) {
          // ReferenceError 타입의 에러 처리
          console.error('budgets ReferenceError:', error);
        } else {
          // 다른 모든 에러 처리
          console.error('budgets Unknown Error:', error);
        }
    }
  };
  
  const getCurrentExpenseData = async () => {
    try {
      const path = '/budget/calcbudget';
      const serverData = await getData<ServerCurrentExpenseData>(path, userToken);
      console.log('getCurrentExpenseData ', serverData);
      // 서버 데이터를 클라이언트의 데이터 구조로 변환
      setGroupAvg(serverData.groupAvg);
      setGroupSum(serverData.groupSum);
      const memberSpendingsData = serverData.groupMemberSpendings2.map((item, index) => ({
        userId: item.userId,
        userName: item.userName,
        userColor: item.userColor,
        spendingNet: item.userSpending,
        spendingsOnAvg: serverData.groupMemberSpendings[index] ? serverData.groupMemberSpendings[index].userSpending : 0,
      }));
      setMateSpendings(memberSpendingsData);
      console.log(memberSpendingsData);
   
    } catch (error) {
        if (error instanceof TypeError) {
          // TypeError 타입의 에러 처리
          console.error('getCurrentExpenseData TypeError:', error);
        } else if (error instanceof ReferenceError) {
          // ReferenceError 타입의 에러 처리
          console.error('getCurrentExpenseData ReferenceError:', error);
        } else {
          // 다른 모든 에러 처리
          console.error('getCurrentExpenseData Unknown Error:', error);
        }
    }
  };

  useEffect(() => {
    getBudgets();
    console.log('budgets', budgets)
  }, []);
  
  return (
      <ExpenseView budgets={budgets} groupAvg={groupAvg} groupSum={groupSum} mateSpendings={mateSpendings} getBudgets={getBudgets} getCurrentExpenseData={getCurrentExpenseData}/>
  );
}

export default ExpenseContainer;
