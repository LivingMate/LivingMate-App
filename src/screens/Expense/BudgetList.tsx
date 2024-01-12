import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Budget from './Budget';

interface PostData {
  id: number;
  content: string;
  isPinned: boolean;
  userId?: string;
  groupId: string;
  date: string;
}

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

  const [budgetData, setBudgetData] = useState<BudgetData[]>([]);

  return (
    <ScrollView>
      <View>
        {budgetData.map((item, index) => (
          <Budget
            key={index}
            amount={item.amount}
            content={item.content}
            category={item.category}
            userId={item.userId}
            date={item.date}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default BudgetList;
