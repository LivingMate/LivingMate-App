import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles';
import PlusIcon from '../../../assets/Icons/PlusIcon';
import db from '../../../db.json';
import TodoList from './TodoList';
import Feed from './Feed';
import Post from './Post'

const HomeScreen = () => {
 
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);

  //round box 길이 변경 함수
  useEffect(() => {
      console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨

  //게시글 추가 버튼 함수
  const buttonPress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.safearea}>

      {/* 이번주 할일 */}
      <View style={[CommonStyles.section, {marginTop: 40}]}>
        <Text style={[styles.title, { color: 'white'}]}>이번주 할 일</Text>
            <TodoList text={null}/>
      </View>

      {/* 피드 */}
      <View 
        style={[CommonStyles.section]}
        onLayout={(event) => {
          const { y } = event.nativeEvent.layout;
          console.log('y of Feed: ', y);
          const calculatedHeight = y * 4 / 5;
          setRoundBoxHeight(calculatedHeight);
        }}
      >
      <Text style={[styles.title, { color: 'black' }]}>피드</Text>
          <Feed />
       {/* <Post content='내용' isPinned={true} authorName='윤민지' authorColor='#CD6363' date='2023-12-20'/> */}
      </View>

      {/* roundBox */}
      <View style={[styles.roundBox, {height: roundBoxHeight}]}></View>
    </SafeAreaView>
    
      {/* plus button */}
    <View style={styles.plusButtonCotainer}>
      <TouchableOpacity 
          onPress={() =>buttonPress("post plus button")}
      >
        <View style={styles.plusButton}>
          <PlusIcon />
        </View>
      </TouchableOpacity>
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
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

  plusButtonCotainer:{
    zIndex: 3, // 가장 앞에 위치
    position: 'absolute',
    bottom: 15,
    width: '95%',
    alignItems: 'flex-end',
  },

  plusButton:{
    backgroundColor: Colors.theme,
    borderRadius: 100,
    width: 56,  
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});

export default HomeScreen;
