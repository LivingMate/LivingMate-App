// NavigationIcons.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../Components/Colors';
import HomeIcon from "../../assets/Icons/HomeIcon";
import CalendarIcon from '../../assets/Icons/CalenderIcon';
import ExpenseIcon from '../../assets/Icons/ExpenseIcon';
import NoticificationIcon from '../../assets/Icons/NoticificationIcon';
import MypageIcon from '../../assets/Icons/MypageIcon';

interface IconsProps {
  routeName: string;
  isFocused: boolean;
  color? : string;
  onPress: () => void;
  onLongPress: () => void;
}

const NavigationIcons: React.FC<IconsProps> = ({ routeName, color, onPress, onLongPress }) => {
  const iconSize = 24;
  let IconComponent: React.FC<{ 
    size: number; 
    color?: string; 
    isFocused: boolean;
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
      size = {iconSize}
      isFocused = {false}
      onPress = {onPress}
      onLongPress = {onLongPress}
      style = {[styles.tabBarItem]}
    />
  ) : null
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    margin: 0,
    backgroundColor: '#ffffff',
  },
  
});

export default NavigationIcons;