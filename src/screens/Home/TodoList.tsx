// TodoList.tsx
import CommonStyles from '../../Components/CommonStyles';
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

interface TodoListProps {
  text: string | null
}

const TodoList: React.FC<TodoListProps> = ({ text }) => {
  const hasText = !!text;
  const content = hasText ? text : "이번주 할 일이 없습니다.";
  const paddingSize = hasText ? 0 : 25;
  const fontSize = hasText ? 16 : 18;

  return(
  <View style={[CommonStyles.generalBox, {paddingVertical: paddingSize}]}>
    <Text style={{fontSize: fontSize}}>{content}</Text>
  </View>
  );
}

export default TodoList;