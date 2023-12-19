
//  BottomTabNavigator.tsx
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet, Platform } from 'react-native';
import NavigationIcons from './NavigationIcons';
import { Colors } from '../Components/Colors';

import ExpenseScreen from '../Screens/Expense/ExpenseScreen';
import CalenderScreen from '../Screens/Calender/CalenderScreen';
import MypageScreen from '../Screens/Mypage/MypageScreen';
import NoticificationScreen from '../Screens/Noticification/NoticificationScreen';
import HomeContainer from '../Screens/Home/HomeContainer';
import { Shadow } from '../Components/Shadow';
import HomeScreen from '../Screens/Home/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

interface TabNavigatorProps { }

const  BottomTabNavigator: React.FC<TabNavigatorProps> = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName = "Mypage"
      shifting = {false}
      activeColor = {Colors.theme}
      inactiveColor = {Colors.button}
      barStyle={{
        backgroundColor: Colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden',
        shadowOffset: { width: Shadow.width, height: Shadow.height },
        shadowOpacity: Shadow.shadowOpacity,
        shadowRadius: Shadow.shadowRadius,
        shadowColor: Shadow.color,
        elevation: Shadow.elevation,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <NavigationIcons
            routeName={route.name}
            isFocused={focused}
            color={focused ? Colors.theme : Colors.button}
            onPress={() => console.log(`${route.name} tab pressed`)}
            onLongPress={() => console.log(`${route.name} tab long pressed`)}
          />
        ),
      })}
    >
      <Tab.Screen name="Expense" component={ExpenseScreen} 
        options={{
          tabBarLabel: "가계부"
        }}
      />
      <Tab.Screen name="Calender" component={CalenderScreen} 
         options={{
          tabBarLabel: "캘린더"
        }}
      />
      <Tab.Screen name="Home" component={HomeScreen} 
         options={{
          tabBarLabel: "홈"
        }}
      />
      <Tab.Screen name="Noticification" component={NoticificationScreen} 
         options={{
          tabBarLabel: "알림"
        }}
      />
      <Tab.Screen name="Mypage" component={MypageScreen} 
         options={{
          tabBarLabel: "마이페이지"
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

