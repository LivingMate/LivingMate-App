import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles'
import MagnifyingGlassIcon from '../../assets/icons/MagnifyingGlassIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundPlusButtonView from '../../common/RoundPlusButtonView';
import CategoryButtonView from './CategoryButtonView';

import CurrentExpenseContainer from './CurrentExpenseContainer';
import BudgetView, { BudgetProps } from './BudgetView';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import RegisterBudgetModalContainer from './RegisterBudgetModalContainer';

interface ExpenseViewProps {
  budgets: BudgetProps[];
}

const ExpenseView:React.FC<ExpenseViewProps> = ({budgets}) => {
  
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);
  
  const [modalVisible, setModalVisible] = useState<boolean>(false); // 모달의 표시 상태를 관리하는 state
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [editingId, setEditingId] = useState<number>(-1);
  const [editingContent, setEditingContent] = useState<string>('');

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
    setEditingId(-1);
    setEditingContent('');
  }
  
  const toggleModalMode = (mode: 'create' | 'edit') => {
    if(mode==='create') setModalMode('create');
    else setModalMode('edit');
  }

  useEffect(() => {
      console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨

  // 버튼 함수
  const handlePress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  //공과금 utilities 식비 food 비품 supplies 기타 others
  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={[CommonStyles.safearea]}>
      {/* 현재 지출 현황 */}           
      <View style={[CommonStyles.section, {marginTop: 20}]}>
        <Text style={[styles.title, { color: 'white'}]}>현재 지출 현황</Text>
        {/* 현재 지출 현황 박스 */}   
        <CurrentExpenseContainer />
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
          <CategoryButtonView title="전체" focused={true} onPress={() => handlePress("전체")}/>
          <CategoryButtonView title="공과금" focused={false} onPress={() => handlePress("공과금")} />
          <CategoryButtonView title="식비" focused={false} onPress={() => handlePress("식비")}  />
          <CategoryButtonView title="비품" focused={false}  onPress={() => handlePress("비품")} />
          <CategoryButtonView title="기타" focused={false} onPress={() => handlePress("기타")} />
        </View>
        
      </View>

      {/* 지출 내역 리스트 */}
      <View style={[CommonStyles.section]}>
        <ScrollView>
          {budgets && budgets.length > 0 ? (
            budgets.map((budget) => (
              <BudgetView
                key={budget.id.toString()}
                id={budget.id}
                price={budget.price}
                content={budget.content}
                category={budget.category}
                userId={budget.userId}
                date={budget.date} 
                groupId={budget.groupId} 
                subCategory={budget.subCategory}              
              />
            ))
            ) : ( 
            <PlaceholderMessage msg='등록된 지출이 없습니다.' fontSize={18} />
          )}
        </ScrollView>
      </View>

      {/* roundBox */}
      <View style={[styles.roundBox, {height: roundBoxHeight}]}></View> 
      </SafeAreaView>

      {/* round plus button */}
      <View style={{alignItems: 'flex-end', paddingHorizontal: '4%'}}>
      <TouchableOpacity onPress={openModal} style={{width: 50}}>
        <RoundPlusButtonView />
      </TouchableOpacity>
      </View>
      {/*<RegisterBudgetModalContainer mode={modalMode} isVisible={modalVisible} onClose={closeModal} /> */}
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
    justifyContent: 'flex-end',
  },

  categories: {
    marginBottom: 3,
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

export default ExpenseView;
