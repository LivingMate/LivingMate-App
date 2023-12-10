// InitialStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/Login/LoginContainer';
import EntryGroupScreen from '../Screens/EntryGroup/EntryGroupScreen';

export type RootStackParamList = {
  Login: undefined;
  EntryGroup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const InitialStackNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Login"
    screenOptions={{
        headerShown: false, // 모든 스크린의 헤더를 숨김
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="EntryGroup" component={EntryGroupScreen} />
      {/* 추가적인 Stack.Screen들을 필요에 따라 정의 */}
    </Stack.Navigator>
  );
};

export default InitialStackNavigator;
