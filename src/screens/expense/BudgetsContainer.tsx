import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import { fetchData } from '../../api/APIs';
import { adaptBudget } from '../../api/Adaptors';
import { ServerBudget } from '../../api/ServerInterfaces';
import BudgetView, { BudgetProps } from './BudgetView';


const BudgetsContainer: React.FC = () => {

  const [budgets, setBudgets] = useState<BudgetProps[]>([]);

  useEffect(() => {
    const fetchAndSetBudgetList = async () => {
      try {
        const serverData = await fetchData<ServerBudget[]>('/budget/aaaaaa');
        const adaptedData = serverData.map(adaptBudget);
        setBudgets(adaptedData);
      } catch (error) {
        console.error('Error fetching budget data:', error);
      }
    };
    fetchAndSetBudgetList();
  }, []);

  return (
    <View>
      {budgets && budgets.length > 0 ? (
          budgets.map((budget) => (
            <BudgetView
              key={budget.id.toString()}
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

export default BudgetsContainer;
