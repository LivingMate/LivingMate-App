import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Budget from './Budget';
import { ApiEndpoints } from '../../api/ApiEndpoints';
import PlaceholderMessage from '../../components/PlaceholderMessage';

interface BudgetData {
  id: number;
  content: string;
  amount: number;
  userId?: string;
  category: string;
  subCategory: string;
  date: string;
}

const BudgetList: React.FC = () => {

  const [budgetList, setBudgetList] = useState<BudgetData[]>([]);

  useEffect(() => {
    const fetchBudgetList = async (groupId: string) => {
      try {
       // const url = `${ApiEndpoints.BASE_URL}/budget/${groupId}`;
        const url = 'http://54.180.100.242:3000/budget/aaaaaa';
        const response = await fetch(url);
        let data: BudgetData[] = await response.json();

        // 서버 데이터를 클라이언트의 데이터 구조로 변환
        data = data.map((item: any) => ({
          id: item.id,
          content: item.spendingName,
          amount: item.spendings,
          userId: item.userId,
          category: item.category,
          subCategory: item.subCategory,
          date: item.createdAt.substring(0,10),
        }));
        console.log('data: ', data)
        setBudgetList(data);

      } catch (error) {
        // data가 빈 배열일 경우, 빈 배열 setting
        console.error('Failed to fetch Budgetlist:', error);
        setBudgetList([]);
      }
    }
    fetchBudgetList(ApiEndpoints.GroupId);
  }, []); 

  return (
    <View>
      {budgetList && budgetList.length > 0 ? (
          budgetList.map((budget) => (
            <Budget
              key={budget.id}
              id={budget.id}
              amount={budget.amount}
              content={budget.content}
              category={budget.category}
              userId={budget.userId}
              date={budget.date}
            />
          ))
      ) : ( 
          <PlaceholderMessage msg='등록된 지출이 없습니다.' fontSize={18} />
      )}
    </View>
  );
};

export default BudgetList;
