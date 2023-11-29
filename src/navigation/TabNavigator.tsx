// TabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native';

import TabBarIcon from './TabBarIcon'; // 새로 추가한 파일

import HomeScreen from '../screens/Home/HomeScreen';
import ExpenseScreen from '../screens/Expense/ExpenseScreen';
import CalanderScreen from '../screens/Calander/CalanderScreen';
import MypageScreen from '../screens/Mypage/MypageScreen';
import NoticificationScreen from '../screens/Noticification/NoticificationScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

interface TabNavigatorProps {
  tabBarOptions?: {
    style?: {
      borderTopLeftRadius: number;
      borderTopRightRadius: number;
    };
  };
}

const RoundedTabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarIcon
            key={route.key}
            routeName={route.name}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            tabBarLabel={options.tabBarLabel} 

          />
        );
      })}
    </View>
  );
};

const getTabBarLabel = (route : any) => {
  let iconLabel= "";
  if (route.name === 'Home') {
    iconLabel = '홈';
  } else if (route.name === 'Calander') {
    iconLabel = '캘린더';
  } else if (route.name === 'Expense') {
    iconLabel = '가계부';
  } else if (route.name === 'Noticification') {
    iconLabel = '알림';
  } else if (route.name === 'Mypage') {
    iconLabel = '마이페이지';
  }
  // 여기에서 각 탭에 대한 라벨을 동적으로 결정
  // 예를 들어, route.name을 기반으로 어떤 라벨을 반환할지 로직을 구현
  return iconLabel;
};

const TabNavigator: React.FC<TabNavigatorProps> = ({ tabBarOptions }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <RoundedTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarLabel: getTabBarLabel(route), // 여기에서 라벨을 설정하는 함수 호출
        headerShown: false,
      })}
    >
      <Tab.Screen name="Expense" component={ExpenseScreen} />
      <Tab.Screen name="Calander" component={CalanderScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Noticification" component={NoticificationScreen} />
      <Tab.Screen name="Mypage" component={MypageScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
    }),
    marginBottom: 50,
  },
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarItem: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
  tabBarLabel: {
    fontSize: 20,
    color: 'blue',
  },
  focusedTab: {},
});

export default TabNavigator;
