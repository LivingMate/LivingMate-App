
//  BottomTabNavigator.tsx
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavigationIcons from './NavigationIcons';
import { Colors } from '../Components/Colors';

import ExpenseScreen from '../Screens/Expense/ExpenseScreen';
import CalenderScreen from '../Screens/Calender/CalenderScreen';
import MypageScreen from '../Screens/Mypage/MypageScreen';
import NoticificationScreen from '../Screens/Noticification/NoticificationScreen';

import HomeScreen from '../Screens/Home/HomeScreen';
import CommonStyles from '../Components/CommonStyles';
import HomeIcon from "../Assets/Icons/HomeIcon";
import CalendarIcon from '../Assets/Icons/CalenderIcon';
import ExpenseIcon from '../Assets/Icons/ExpenseIcon';
import NoticificationIcon from '../Assets/Icons/NoticificationIcon';
import MypageIcon from '../Assets/Icons/MypageIcon';
import PinIcon from '../Assets/Icons/PinIcon';
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

