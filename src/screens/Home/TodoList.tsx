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
    const fetchTodoList = async () => {
      try {
        const response = await fetch('http://54.180.100.242:3000/calendar/thisweek/aaaaaa');
        let data: TodoData[] = await response.json();

        // 서버 데이터를 클라이언트의 데이터 구조로 변환
        data = data.map((item: any) => ({
          id: item.id,
          content: item.title,
          groupId: item.groupId,
          weekDays: item.daysOfWeek,
          participants: item.participants,
        }));

        setThisWeekTodoList(data);
        onTodoCountChange(data.length); 
        
      } catch (error) {
        // data가 빈 배열일 경우, 빈 배열 setting
        console.error('Failed to fetch todolist:', error);
        setThisWeekTodoList([]);
        onTodoCountChange(0);
      }
    }
    fetchTodoList();
  }, []); 
  /*
  test data 용 
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
  */

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