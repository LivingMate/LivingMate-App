import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import { CategoryProps } from './types';

// Props 타입 정의
interface catagoriesButtonViewProps extends CategoryProps {
  focused: boolean,
  onPress: () => void;
}

// CustomButton 컴포넌트 정의
const categoryButtonView: React.FC<catagoriesButtonViewProps> = ({ name, focused, onPress }) => {
  const backgroundColor = focused ? Colors.theme : Colors.white;
  const textColor = focused ? '#FFFFFF':'#000000' ;
  return (
    <TouchableOpacity
      style={[styles.button,{backgroundColor: backgroundColor}]} 
      onPress={onPress}
    >
      <Text style={[styles.text, {color: textColor}]}>{name}</Text>
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
    ...CommonStyles.shadow,
  },
  text: {
    color: Colors.black,
    fontSize: 14,
  },
});

export default categoryButtonView;
