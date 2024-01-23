import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles';
import PlusIcon from '../../Assets/Icons/PlusIcon';
import db from '../../../db.json';
import TodoList from './TodoList';
import Feed from './Feed';
import Post from './Post'
import RoundPlusButton from '../../Components/RoundPlusButton';
import ModalDialog from '../../Modals/ModalDialog';
import ScreenA from '../../Modals/ex';

const HomeScreen = () => {
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);
  const [todoCount, setTodoCount] = useState<number>(0);

  const handleTodoCountChange = (count: number) => {
    setTodoCount(count);
  };

  const [modalVisible, setModalVisible] = React.useState(false); // 모달의 표시 상태를 관리하는 state
  const openModal = () => setModalVisible(true); // 모달을 여는 함수
  const closeModal = () => setModalVisible(false); // 모달을 닫는 함수
  
  //round box 길이 변경 함수
  useEffect(() => {
      console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨

  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={CommonStyles.safearea}>
      {/* 이번주 할일 */}
      <View style={[CommonStyles.section, {marginTop: 20}]}>
        <Text style={[styles.title, { color: 'white'}]}> 이번주 할 일 ({todoCount})</Text>
        <TodoList onTodoCountChange={handleTodoCountChange} />
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
    
      {/* round plus button */}
      <RoundPlusButton openModal={openModal}/>
      <ModalDialog visible={modalVisible} onClose={closeModal} screenComponent={<ScreenA/>}/> 
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
});

export default HomeScreen;
