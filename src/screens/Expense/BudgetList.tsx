import React from 'react';
import { View, ScrollView } from 'react-native';
import Budget from './Budget';
import budgetData from './TestData';

const BudgetList: React.FC = () => {
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
