// TodoList.tsx
import PlaceholderMessage from '../../Components/PlaceholderMessage';
import CommonStyles from '../../Components/CommonStyles';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native';
import Todo from './Todo';
import {todosData} from './TestData';

interface TodoData {
  id: number;
  content: string;
  weekDays: string;
  participants: string[];
}

const TodoList: React.FC = () => {
  const [thisWeekTodoList, setThisWeekTodoList] = useState<TodoData[]>([]);

  useEffect(() => {
    if (todosData.length > 0)  {
      // 정렬된 데이터를 setting
      setThisWeekTodoList(todosData);
    } else {
      // data가 빈 배열일 경우, 빈 배열 setting
      setThisWeekTodoList([]);
    }
  }, []); // dependency 배열에 추가  
  
  return (
    <ScrollView>
        {thisWeekTodoList.length > 0 ? (
          thisWeekTodoList.map((todo) => (
            <Todo
              key={todo.id}
              content={todo.content}
              weekDays={todo.weekDays} 
              participants={todo.participants}         
            />
          ))
        ) : (
          <PlaceholderMessage msg='이번주 할 일이 없습니다.' fontSize={18} />
        )}
    </ScrollView>
  );
}

export default TodoList;