import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Button, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components/Colors';
import CategoryButton from './CategoryButton';
import CommonStyles from '../../Components/CommonStyles'
import PlusIcon from '../../Assets/Icons/PlusIcon';
import MagnifyingGlassIcon from '../../Assets/Icons/MagnifyingGlassIcon';
import BudgetList from './BudgetList';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const ExpenseScreen = () => {
  const insets = useSafeAreaInsets();

  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);

  useEffect(() => {
      console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨

  // 버튼 함수
  const handlePress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  // 버튼 press 함수
  const buttonPress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  //공과금 utilities 식비 food 비품 supplies 기타 others

  return (
    <View>
      <SafeAreaView style={CommonStyles.safearea}>

      {/* 현재 지출 현황 */}
      <View style={[CommonStyles.section, {marginTop: 40}]}>
        <Text style={[styles.title, { color: 'white'}]}>현재 지출 현황</Text>
        <View style={[styles.currentExpenses]}>
          <Text style={{fontSize: 18}}>
            총 84000원
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
        
        <View style={[styles.searchContainer]}>
          <MagnifyingGlassIcon />
        </View>

        <View style={[styles.categories, { borderTopColor: 'black', borderTopWidth: 1 }]}>
          <CategoryButton title="전체" focused={true} onPress={() => handlePress("전체")}/>
          <CategoryButton title="공과금" focused={false} onPress={() => handlePress("공과금")} />
          <CategoryButton title="식비" focused={false} onPress={() => handlePress("식비")}  />
          <CategoryButton title="비품" focused={false}  onPress={() => handlePress("비품")} />
          <CategoryButton title="기타" focused={false} onPress={() => handlePress("기타")} />
        </View>
        
      </View>

      {/* 지출 내역 리스트 */}
      <View style={[CommonStyles.section]}>
          <ScrollView>
              <BudgetList />
          </ScrollView>
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
    padding: 20,
    justifyContent: 'flex-start',
    ...CommonStyles.shadow,
  },

  searchContainer : {
    flexDirection: 'row',  // 가로 방향으로 정렬
    marginHorizontal: '5%',
    paddingBottom: 5,
    justifyContent: 'flex-end',
  },

  categories: {
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
    ...CommonStyles.shadow,
  },

  text: {
    fontSize: 18,
    alignItems: 'flex-start',
  },
});

export default ExpenseScreen;
