import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles';
import PlusIcon from '../../Assets/Icons/PlusIcon';
import db from '../../../db.json';
import TodoList from './TodoList';
import Feed from './Feed';
import Post from './Post'

const HomeScreen = () => {
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);
  const [todoCount, setTodoCount] = useState<number>(0);
  const [todolistBoxMaxHeight, setTodolistBoxMaxHeight] = useState<number>(200);
  const [todolistBoxMaxHeightButtonColor, setTodolistBoxMaxHeightButtonColor] = useState<string>(Colors.text);
  const [todolistBoxPaddingBottom, setTodolistBoxPaddingBottom] = useState<number>(10);
  

  const handleTodoCountChange = (count: number) => {
    setTodoCount(count);
  };
  //round box 길이 변경 함수
  useEffect(() => {
      console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨

  //게시글 추가 버튼 함수
  const buttonPress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  const toggleTodolistBox = () => {
    setTodolistBoxMaxHeight(todolistBoxMaxHeight === 200 ? 590 : 200);
    setTodolistBoxMaxHeightButtonColor(todolistBoxMaxHeight === 200 ? Colors.theme : Colors.button)
    setTodolistBoxPaddingBottom(todolistBoxMaxHeight === 200 ? 40 : 10);
  };

  return (
    <View>
      <SafeAreaView style={CommonStyles.safearea}>
      {/* 이번주 할일 */}
      <View style={[CommonStyles.section, {marginTop: 20}]}>
        <Text style={[styles.title, { color: 'white'}]}> 이번주 할 일 ({todoCount})</Text>
        <View style={[styles.generalBox, {maxHeight: todolistBoxMaxHeight, paddingBottom: todolistBoxPaddingBottom}]}>
          <TouchableOpacity 
            style={{marginVertical: 10, alignItems: 'flex-end'}} 
            onPress={toggleTodolistBox}
          >
             <View style={[styles.arrowDownIcon, {borderBottomColor:todolistBoxMaxHeightButtonColor}]}></View>
          </TouchableOpacity>
          <TodoList onTodoCountChange={handleTodoCountChange} />
        </View>
      </View>


      {/* 피드 */}
      <View 
        style={[CommonStyles.section, {minHeight: 600}]}
        onLayout={(event) => {
          const { y } = event.nativeEvent.layout;
          console.log('y of Feed: ', y);
          const calculatedHeight = y * 4 / 5;
          setRoundBoxHeight(calculatedHeight);
        }}
      >
      <Text style={[styles.title, { color: 'black' }]}>피드</Text>
      <Feed />
      </View>

      {/* roundBox */}
      <View style={[styles.roundBox, {height: roundBoxHeight}]}></View>
    </SafeAreaView>
    
      {/* plus button */}
    <View style={CommonStyles.plusButtonCotainer}>
      <TouchableOpacity 
          onPress={() =>buttonPress("post plus button")}
      >
        <View style={CommonStyles.plusButton}>
          <PlusIcon />
        </View>
      </TouchableOpacity>
    </View>
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
  
  roundBox: {
    zIndex: 1, // 낮은 zIndex로 맨 뒤에 위치
    backgroundColor: Colors.theme,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    width: '100%', // 너비 
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginVertical: 15,
    marginHorizontal: '5%',
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
});

export default HomeScreen;
