// TabBarIcon.tsx

import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Colors } from '../Components/Colors'

// Icon 이름을 문자열 리터럴 타입으로 정의
type IconName = 'home' | 'ios-calendar' | 'ios-list' | 'ios-notifications' | 'ios-person';

// Bottom Tab Bar Icon에 대한 속성 정의
interface TabBarIconProps {
  routeName: string; // 탭 바 아이콘의 이름
  isFocused: boolean; // 탭이 현재 선택되었는지 여부
  onPress: () => void; // 탭을 눌렀을 때의 콜백 함수
  onLongPress: () => void; // 탭을 길게 눌렀을 때의 콜백 함수
}

// Bottom Tab Bar Icon 컴포넌트 정의
const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, isFocused, onPress, onLongPress }) => {
  const iconSize = 24;

  let iconName: IconName = 'home';

  // 각각의 화면에 따라 아이콘 이름 지정
  if (routeName === 'Home') {
    iconName = 'home';
  } else if (routeName === 'Calander') {
    iconName = 'ios-calendar';
  } else if (routeName === 'Expense') {
    iconName = 'ios-list';
  } else if (routeName === 'Noticification') {
    iconName = 'ios-notifications';
  } else if (routeName === 'Mypage') {
    iconName = 'ios-person';
  }

  return (
    <Ionicons
      name={iconName}
      size={iconSize}
      color={isFocused ? Colors.theme : Colors.buttonNotFocused}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.tabBarItem, isFocused && styles.focusedTab]}
    />
  );
};

// 스타일 시트 정의
const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1, // 아이템이 사용할 수 있는 공간을 최대한 확장
    justifyContent: 'center', // 세로 중앙 정렬
    textAlign: 'center', // 아이템 안의 텍스트를 가운데 정렬
    padding: 0, // 아이템의 안쪽 여백
    margin: 0,
    backgroundColor: Colors.background,
  },
  focusedTab: {
    // 추가적인 스타일링이 필요한 경우 여기에 추가
  },
});

export default TabBarIcon;
