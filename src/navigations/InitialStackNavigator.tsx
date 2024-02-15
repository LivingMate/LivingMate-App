// InitialStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../screens/login/LoginContainer';
import BottomTabNavigator from './BottomTabNavigator';
import EntryGroupContainer from '../screens/entryGroup/EntryGroupContainer';
import { Colors } from '../common/Colors';
import SignupContainer from '../screens/signup/SignupContainer';


const Stack = createStackNavigator();

const InitialStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginContainer} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="EntryGroup" 
        component={EntryGroupContainer}
       // options={{ headerShown: false }}
        options={{
          headerTitle: "개발 중에만 보이게", // 헤더 타이틀 직접 설정
        }}
      />
      <Stack.Screen 
        name="BottomTabNavigator" 
        component={BottomTabNavigator} 
      // options={{ headerShown: false }}
      />
        <Stack.Screen 
        name="Signup" 
        component={SignupContainer}
        options={{
          headerStyle: {
            backgroundColor: '#fff', // 헤더의 배경색 설정
          },
          headerTintColor: Colors.theme, // 헤더의 텍스트 색상 설정
          headerTitleStyle: {
            color: '#000',
          },
          headerTitle: "회원가입", // 헤더 타이틀 직접 설정
        }}
      />
    </Stack.Navigator>
  );
}

export default InitialStackNavigator;
