import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import PlaceholderMessage from '../../Components/PlaceholderMessage';

const CurrentExpense: React.FC = () => {
  const [currentBudgets, setCurrentBudgets] = useState<number>(0);
/*
  useEffect(() => {
    if (budgetData.length > 0)  {
      setCurrentBudgets(54321)
    } else {
      // data가 빈 배열일 경우, 빈 배열 setting
      setCurrentBudgets(0)
    }
  }, []); // dependency 배열에 추가  
*/
  return (
    <View>
        { currentBudgets > 0 ? (
            <PlaceholderMessage msg={'총 '+currentBudgets+'원'} fontSize={18} />
        ) : (
            <PlaceholderMessage msg='등록된 지출이 없습니다.' fontSize={18} />
        ) }
    </View>
  );
};

export default CurrentExpense;
