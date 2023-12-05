// ExpenseScreen.tsx
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import CustomSafeAreaView from '../../Components/CustomSafeAreaView';
import ExampleIcon from '../../Components/Icons/ExampleIcon';
import RoundedBox from '../../Components/RoundedBox';

const ExpenseScreen = () => {
  return (
  <CustomSafeAreaView>
      <View>
        <Text>"ExpenseScreen"</Text>
        <ExampleIcon />
        <RoundedBox>
          <Text>Hello from MainComponent!</Text>
        </RoundedBox>
      </View>
  </CustomSafeAreaView>
  );
};

export default ExpenseScreen;
