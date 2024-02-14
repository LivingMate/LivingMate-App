/* App.tsx 또는 별도의 네비게이션 설정 파일

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import exModal from '../../modals/exModal';
import RegisterBudgetModalContainer, { RegisterBudgetModalContainerProps } from './RegisterBudgetModalContainer';

export type ExpenseStackParamList = {
    ExpenseContainer: undefined; // 다른 파라미터가 필요하지 않은 경우
   // RegisterBudgetModalContainer: RegisterBudgetModalContainerProps // 필요한 props를 여기에 정의
    RegisterBudgetModalContainer: 
        {mode: 'create' | 'edit';
        isVisible: boolean;
        id?: number; // edit 모드일 때만
    }
    exModal: undefined;
};

const Stack = createStackNavigator<ExpenseStackParamList>();

const ExpenseStackNavigator: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="ExpenseContainer">
        <Stack.Screen name="ExpenseContainer" component={ExpenseContainer} />
       {/* <Stack.Screen name="RegisterBudgetModalContainer" component={RegisterBudgetModalContainer} />
        <Stack.Screen name="exModal" component={exModal} />
      </Stack.Navigator>   
  );
};

export default ExpenseStackNavigator;
*/