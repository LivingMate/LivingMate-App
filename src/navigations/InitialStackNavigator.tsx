// InitialStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../screens/login/LoginContainer';
import BottomTabNavigator from './BottomTabNavigator';
import EntryGroupContainer from '../screens/entryGroup/EntryGroupContainer';

const Stack = createStackNavigator();

const InitialStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="EntryGroup" component={EntryGroupContainer} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default InitialStackNavigator;
