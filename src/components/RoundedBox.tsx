import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface RoundedBoxProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const RoundedBox: React.FC<RoundedBoxProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, styles.rounded, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'lightblue',
  },
  rounded: {
    borderRadius: 10, // 둥근 테두리를 추가하는 스타일
  },
});

export default RoundedBox;
