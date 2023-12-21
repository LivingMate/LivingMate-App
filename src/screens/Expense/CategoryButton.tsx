import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../Components/Colors';
import { Shadow } from '../../Components/Shadow';

// Props 타입 정의
interface catagoriesButtonProps {
  title: string;
  focused: boolean,
  onPress: () => void;
}

// CustomButton 컴포넌트 정의
const categoryButton: React.FC<catagoriesButtonProps> = ({ title, focused, onPress }) => {
  const backgroundColor = focused ? Colors.theme : Colors.white;
  const textColor = focused ? '#FFFFFF':'#000000' ;
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor: backgroundColor}]} onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    margin: 5,
    width: 47,
    height: 22,
    justifyContent: 'center',
    shadowOffset: { width: Shadow.width, height: Shadow.height },
    shadowOpacity: Shadow.shadowOpacity,
    shadowRadius: Shadow.shadowRadius,
    shadowColor: Shadow.color,
    elevation: Shadow.elevation,
  },
  text: {
    color: Colors.black,
    onPressedColor: Colors.white,
    fontSize: 14,
  },
});

export default categoryButton;
