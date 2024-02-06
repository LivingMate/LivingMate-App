
//  BottomTabNavigator.tsx
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavigationIcons from './NavigationIcons';
import { Colors } from '../common/Colors';

import ExpenseScreen from '../screens/expense/ExpenseScreen';
import CalenderScreen from '../screens/calender/CalenderScreen';
import MypageScreen from '../screens/mypage/MypageScreen';
import NoticificationScreen from '../screens/noticification/NoticificationScreen';

import HomeScreen from '../screens/home/HomeScreen';
import CommonStyles from '../common/CommonStyles';
import HomeIcon from "../assets/icons/HomeIcon";
import CalendarIcon from '../assets/icons/CalenderIcon';
import ExpenseIcon from '../assets/icons/ExpenseIcon';
import NoticificationIcon from '../assets/icons/NoticificationIcon';
import MypageIcon from '../assets/icons/MypageIcon';
import PinIcon from '../assets/icons/PinIcon';
import { getTime } from 'date-fns';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = ({}) => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? HomeIcon : PinIcon;
            } else if (route.name === 'Calender') {
              iconName = focused ? CalendarIcon : PinIcon;
            } else if (route.name === 'Expense') {
              iconName = focused ? ExpenseIcon : PinIcon;
            } else if (route.name === 'Noticification') {
              iconName = focused ? NoticificationIcon : PinIcon;
            } else if (route.name === 'Mypage') {
              iconName = focused ? MypageIcon : PinIcon;
            }
            
            return (
              <NavigationIcons
                routeName={route.name}
                isFocused={focused} 
                onPress={() => console.log(`${route.name} tab pressed`)}
                onLongPress={() => console.log(`${route.name} tab long pressed`)}
            />);
            
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calender" component={CalenderScreen} />
        <Tab.Screen name="Expense" component={ExpenseScreen} />
        <Tab.Screen name="Noticification" component={NoticificationScreen} />
        <Tab.Screen name="Mypage" component={MypageScreen} />
      </Tab.Navigator>

    /*
    <Tab.Navigator
      initialRouteName = "Home"
      shifting = {false}
      //activeColor = {Colors.theme}
      //inactiveColor = {Colors.button}
      barStyle={{
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden',
        ...CommonStyles.shadow,
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
          tabBarLabel: "가계부",
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
      
    </Tab.Navigator> */
  );
};

export default BottomTabNavigator;

