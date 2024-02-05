
//  BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';

import { Colors } from '../components/Colors';
import CommonStyles from '../components/CommonStyles';

import ExpenseScreen from '../screens/expense/ExpenseScreen';
import CalenderScreen from '../screens/calender/CalenderScreen';
import MypageScreen from '../screens/mypage/MypageScreen';
import NoticificationScreen from '../screens/noticification/NoticificationScreen';
import HomeScreen from '../screens/home/HomeScreen';

import ExpenseIcon from '../assets/Icons/Navigaton/ExpenseIcon';
import HomeIcon from '../assets/Icons/Navigaton/HomeIcon';
import CalenderIcon from '../assets/Icons/Navigaton/CalenderIcon';
import NoticificationIcon from '../assets/Icons/Navigaton/NoticificationIcon';
import MypageIcon from '../assets/Icons/Navigaton/MypageIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({}) => {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',  
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          ...CommonStyles.shadow,
          paddingTop: 10,
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.theme,
        tabBarInactiveTintColor: Colors.button,
      }}
    >
      <Tab.Screen 
        name="Expense" 
        component={ExpenseScreen} 
        options={
          {
            tabBarLabel: '가계부',
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <ExpenseIcon focused={focused} color={color}/>
              </View>
            ),
            tabBarIconStyle: {
              color: 'red',
            }
          }
        } 
      />
      <Tab.Screen 
        name="Calender" 
        component={CalenderScreen}
        options={
          {
            tabBarLabel: '캘린더',
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <CalenderIcon focused={focused} color={color}/>
              </View>
            ),
            
          }
        } 
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={
          {
            tabBarLabel: '홈',
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <HomeIcon focused={focused} color={color}/>
              </View>
            ),
          }
        } 
      />
      <Tab.Screen 
        name="Noticification" 
        component={NoticificationScreen} 
        options={
          {
            tabBarLabel: '알림',
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <NoticificationIcon focused={focused} color={color}/>
              </View>
            ),

          }
        }
      />
      <Tab.Screen 
        name="Mypage" 
        component={MypageScreen} 
        options={
          {
            tabBarLabel: '마이페이지',
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <MypageIcon focused={focused} color={color} />
              </View>
            ),
          }
        }
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
   
  }
});

export default BottomTabNavigator;