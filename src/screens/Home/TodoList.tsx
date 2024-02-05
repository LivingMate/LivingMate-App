// TodoList.tsx
import PlaceholderMessage from '../../components/PlaceholderMessage';
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {todosData} from './TestData';
import Todo from './Todo';
import { Colors } from '../../components/Colors';
import CommonStyles from '../../components/CommonStyles';
import { ApiEndpoints } from '../../api/ApiEndpoints';
import ArrowUpAndDownIcon from '../../assets/Icons/ArrowUpAndDownIcon';

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
  const [boxMaxHeight, setBoxMaxHeight] = useState<number | null>(200);
  const [boxMaxHeightButtonFocused, setBoxMaxHeightButtonFocused] = useState<boolean>(false);
  const [boxMaxHeightButtonColor, setBoxMaxHeightButtonColor] = useState<string>(Colors.button);
  const [boxPadding, setBoxPadding] = useState<number>(10);

  const toggleBoxHeight = () => {
    setBoxMaxHeight(boxMaxHeightButtonFocused ? 200 : 630);
    setBoxMaxHeightButtonFocused(boxMaxHeightButtonFocused ? false: true)
    setBoxMaxHeightButtonColor(boxMaxHeightButtonFocused ? Colors.button : Colors.theme)
  };

  useEffect(() => {
    const fetchTodoList = async (groupId: string) => {
      try {
        const url = `${ApiEndpoints.BASE_URL}calendar/thisweek/${groupId}`;
        const response = await fetch(url);
        
        let data: TodoData[] = await response.json();

        console.log("data:", data);

        // 서버 데이터를 클라이언트의 데이터 구조로 변환
        data = data.map((item: any) => ({
          id: item.id,
          content: item.title,
          groupId: item.groupId,
          weekDays: item.daysOfWeek.join(''),
          participants: item.participants,
        }));
        console.log("after data:", data);

        setThisWeekTodoList(data);
        onTodoCountChange(data.length); 
        
      } catch (error) {
        // data가 빈 배열일 경우, 빈 배열 setting
        console.error('Failed to fetch todolist:', error);
        setThisWeekTodoList([]);
        onTodoCountChange(0);
      }
    }
    fetchTodoList(ApiEndpoints.GroupId);
  }, []); 
  
  /* test data 용 
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
      <View>
        {thisWeekTodoList && thisWeekTodoList.length > 0 ? (
          <View style={[styles.generalBox, {maxHeight: boxMaxHeight}]}>
            <ScrollView>
              {thisWeekTodoList.map((todo) => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  content={todo.content}
                  weekDays={todo.weekDays}
                  participants={todo.participants}        
                />
              ))}
            </ScrollView>
            <TouchableOpacity 
              style={{alignItems: 'flex-start', marginLeft: 12}} 
              onPress={toggleBoxHeight}
            >
              <ArrowUpAndDownIcon focused={boxMaxHeightButtonFocused} color={boxMaxHeightButtonColor}/>      
            </TouchableOpacity>
          </View>
        ) : (
          <PlaceholderMessage msg='이번주 할 일이 없습니다.' fontSize={18} />
        )}
      </View>
    );    
}

const styles = StyleSheet.create({
  generalBox: {
    backgroundColor: Colors.white,
    marginHorizontal: '5%',
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    ...CommonStyles.shadow,
  },

  arrowUpIcon: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent', //투명
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.button,
    marginRight: 10,
    alignItems: 'flex-end',
  },
  arrowDownIcon: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
   //borderBottomColor: Colors.text,
    transform: [{ rotate: '180deg' }],
    marginRight: 10,
    alignItems: 'flex-end',
  },
})

export default TodoList;