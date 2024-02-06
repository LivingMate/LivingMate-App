// TodosContainer.tsx
import PlaceholderMessage from '../../common/PlaceholderMessage';
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import ArrowUpAndDownIcon from '../../assets/icons/ArrowUpAndDownIcon';
import TodoView, { TodoProps } from './TodoView';

const TodosContainer = () => {

  const [thisWeekTodoList, setThisWeekTodoList] = useState<TodoProps[]>([]);
  const [boxMaxHeight, setBoxMaxHeight] = useState<number | null>(200);
  const [boxMaxHeightButtonFocused, setBoxMaxHeightButtonFocused] = useState<boolean>(false);
  const [boxMaxHeightButtonColor, setBoxMaxHeightButtonColor] = useState<string>(Colors.button);
  const [todoCount, setTodoCount] = useState<number>(0);

  const toggleBoxHeight = () => {
    setBoxMaxHeight(boxMaxHeightButtonFocused ? 200 : 630);
    setBoxMaxHeightButtonFocused(boxMaxHeightButtonFocused ? false: true)
    setBoxMaxHeightButtonColor(boxMaxHeightButtonFocused ? Colors.button : Colors.theme)
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const url = `http://54.180.100.242:3000/calendar/thisweek/aaaaaa`;
        const response = await fetch(url);
        
        let data: TodoProps[] = await response.json();

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
        setTodoCount(data.length);
        
      } catch (error) {
        // data가 빈 배열일 경우, 빈 배열 setting
        console.error('Failed to fetch todolist:', error);
        setThisWeekTodoList([]);
        setTodoCount(0);
      }
    }
    fetchTodos();
  }, []); 

    return (
      <View>
        <Text style={[styles.title, { color: 'white'}]}> 이번주 할 일 ({todoCount})</Text>
        {thisWeekTodoList && thisWeekTodoList.length > 0 ? (
          <View style={[styles.generalBox, {maxHeight: boxMaxHeight}]}>
            <ScrollView>
              {thisWeekTodoList.map((todo, index) => (
                <TodoView
                 // key={todo.id.toString()}
                  key={index.toString()}
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
    transform: [{ rotate: '180deg' }],
    marginRight: 10,
    alignItems: 'flex-end',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginVertical: 15,
    marginHorizontal: '5%',
  },
})

export default TodosContainer;