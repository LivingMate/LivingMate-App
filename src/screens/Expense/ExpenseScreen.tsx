import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, Button, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components/Colors';
import CategoryButton from './CategoryButton';
import CommonStyles from '../../Components/CommonStyles'
import { Shadow } from '../../Components/Shadow';
import PlusIcon from '../../../assets/Icons/PlusIcon';

const ExpenseScreen = () => {
 
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);

  useEffect(() => {
      console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨

  //카테고리 버튼 함수
  const handlePress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  //게시글 추가 버튼 함수
  const buttonPress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.safearea}>

      {/* 현재 지출 현황 */}
      <View style={[CommonStyles.section, {marginTop: 40}]}>
        <Text style={[styles.title, { color: 'white'}]}>현재 지출 현황</Text>
        <View style={[styles.currentExpenses]}>
          <Text style={[styles.text, { marginVertical: 15}]} >
            등록된 지출 내역이 없습니다.
          </Text>
        </View>
      </View>

      {/* 지출 카테고리 및 검색*/}
      <View 
        style={[CommonStyles.section]}
        onLayout={(event) => {
          const { y } = event.nativeEvent.layout;
          console.log('y:', y);
          const calculatedHeight = y * 4 / 5;
          setRoundBoxHeight(calculatedHeight);
        }}
        >
        <View style={CommonStyles.section}>
        <View style={[styles.catagories]}>
          <Text> 아이콘 넣기 </Text>
        </View>
        <View style={[styles.catagories, { borderTopColor: 'black', borderTopWidth: 1 }]}>
          <CategoryButton title="전체" onPress={() => handlePress("전체")}/>
          <CategoryButton title="공과금" onPress={() => handlePress("공과금")} />
          <CategoryButton title="식비" onPress={() => handlePress("식비")}  />
          <CategoryButton title="비품" onPress={() => handlePress("비품")} />
          <CategoryButton title="기타" onPress={() => handlePress("기타")} />
        </View>
        </View>
      </View>

      {/* 지출 내역 리스트 */}
      <View style={[CommonStyles.section]}>
          <ScrollView>
              <View style={styles.expenseItem}>
                <Text style={styles.text}>이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다</Text>
              </View>
              <View style={styles.expenseItem}>
                <Text style={styles.text}>이 텍스트는 앞에 있습니다</Text>
              </View>
              <View style={styles.expenseItem}>
                <Text style={styles.text}>이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다</Text>
              </View>
              <View style={styles.expenseItem}>
                <Text style={styles.text}>이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다이 텍스트는 앞에 있습니다</Text>
              </View>
            </ScrollView>
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
    zIndex: 1, // 낮은 zIndex로 뒤에 위치
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

  currentExpenses: {
    backgroundColor: Colors.white,
    marginBottom: 10,
    marginHorizontal: '5%',
    borderRadius: 12,
    padding: 10,
    justifyContent: 'center',
    shadowOffset: { width: Shadow.width, height: Shadow.height },
    shadowOpacity: Shadow.shadowOpacity,
    shadowRadius: Shadow.shadowRadius,
    shadowColor: Shadow.color,
    elevation: Shadow.elevation,
  },

  catagories: {
    marginBottom: 10,
    marginHorizontal: '5%',
    alignItems: 'flex-start',
    flexDirection: 'row',  // 가로 방향으로 정렬
  },

  expenseItem: {
    backgroundColor: Colors.white,
    marginHorizontal: '5%',
    marginBottom:20, 
    borderRadius: 12,
    padding: 10,
    shadowOffset: { width: Shadow.width, height: Shadow.height },
    shadowOpacity: Shadow.shadowOpacity,
    shadowRadius: Shadow.shadowRadius,
    shadowColor: Shadow.color,
    elevation: Shadow.elevation,
  },

  text: {
    fontSize: 18,
    alignItems: 'flex-start',
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

export default ExpenseScreen;
