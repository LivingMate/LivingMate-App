// TabBarIcon.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../Components/Colors';
import HomeIcon from "../Components/Icons/HomeIcon";
import CalendarIcon from '../Components/Icons/CalenderIcon';
import ExpenseIcon from '../Components/Icons/ExpenseIcon';
import NoticificationIcon from '../Components/Icons/NoticificationIcon';
import MypageIcon from '../Components/Icons/MypageIcon';

interface TabBarIconProps {
  routeName: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, isFocused, onPress, onLongPress }) => {
  const iconSize = 24;
  let IconComponent: React.FC<{ 
    size: number; 
    color: string; 
    onPress?: () => void; 
    onLongPress: () => void;
    style: {}[];
  }> | null = null;

  // routeName에 따라 적절한 아이콘 컴포넌트를 할당.
  if (routeName === 'Home') {
    IconComponent = HomeIcon;
  } else if (routeName === 'Calendar') {
    IconComponent = CalendarIcon;
  } else if (routeName === 'Expense') {
    IconComponent = ExpenseIcon;
  } else if (routeName === 'Noticification') {
    IconComponent = NoticificationIcon;
  } else if (routeName === 'Mypage') {
    IconComponent = MypageIcon;
  }

  // 아이콘 컴포넌트가 있다면 렌더링하고, 아니면 null을 반환.
  return IconComponent ? (
    <IconComponent
      size={iconSize}
      color={isFocused ? Colors.theme : Colors.buttonNotFocused}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.tabBarItem, isFocused && styles.focusedTab]}
    />
  ) : null
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 0,
    margin: 0,
   // backgroundColor: 
  },
  focusedTab: {
    // 필요한 경우 추가적인 스타일링을 여기에 작성.
  },
});

export default TabBarIcon;