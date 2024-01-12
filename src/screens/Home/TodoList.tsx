// TodoList.tsx
import PlaceholderMessage from '../../Components/PlaceholderMessage';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {todosData} from './TestData';
import Todo from './Todo';

interface TodoData {
  id: number;
  content: string;
  weekDays: string;
  participants: string[];
}

interface TodoListProps {
  onTodoCountChange: (count: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ onTodoCountChange }) => {
  const [thisWeekTodoList, setThisWeekTodoList] = useState<TodoData[]>([]);

  useEffect(() => {
    if (todosData.length > 0)  {
      // 정렬된 데이터를 setting
      setThisWeekTodoList(todosData);
      onTodoCountChange(todosData.length); 
    } else {
      // data가 빈 배열일 경우, 빈 배열 setting
      setThisWeekTodoList([]);
      onTodoCountChange(0);
    }}, [todosData]); 
  

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