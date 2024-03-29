import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles'
import MagnifyingGlassIcon from '../../assets/icons/MagnifyingGlassIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundPlusButtonView from '../../common/RoundPlusButtonView';
import BudgetView from './BudgetView';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import { BudgetProps, MateSpendingProps, modeType } from './types';
import CurrentExpenseView from './adjusted/CurrentExpenseView';
import CategoryButtonView from './register/CategoryButtonView';
import RegisterBudgetModalContainer from './register/RegisterBudgetModalContainer';

interface ExpenseViewProps {
  budgets: BudgetProps[];
  getBudgets: () => void;
  getCurrentExpenseData: () => void;
  groupSum: number,
  groupAvg: number,
  mateSpendings: MateSpendingProps[];
}

const ExpenseView:React.FC<ExpenseViewProps> = ({budgets, getBudgets, groupSum, groupAvg, mateSpendings, getCurrentExpenseData}) => {
  
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);
  
  const [modalVisible, setModalVisible] = useState<boolean>(false); // 모달의 표시 상태를 관리하는 state
  const [modalMode, setModalMode] = useState<modeType>('create');
  const [editingBudget, setEditingBudget] = useState<BudgetProps|null>(null);

  const [searchFieldVisivble, setSearchFieldVisible] = useState<boolean>(false); 
  
  const openModal = (mode: modeType) => {
    setModalMode(mode)
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
    setEditingBudget(null);
  }

  // 버튼 함수
  const handlePress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  const handleSearchFieldVisible = () => {
    setSearchFieldVisible(current => !current);
  }

  const handleEditingBudget = (
    id: number,
    price: number,
    category: string,
    groupId: string,
    subCategory: string,
    content: string,
    date: string,
    userId?: string,
    userName?: string,
    userColor?: string,
  ) => {
      const editingBudget: BudgetProps = {
        id: id,
        price: price,
        category: category,
        groupId: groupId,
        subCategory: subCategory,
        content: content,
        date: date,
      }
      setEditingBudget(editingBudget);
  }

  useEffect(() => {
    console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨

  //공과금 utilities 식비 food 비품 supplies 기타 others
  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={[CommonStyles.safearea]}>
      {/* 현재 지출 현황 */}           
      <View style={[CommonStyles.section]}>
        <Text style={[styles.title, { color: 'white'}]}>현재 지출 현황</Text>
        {/* 현재 지출 현황 박스 */}   
        <CurrentExpenseView groupSum={groupSum} groupAvg={groupAvg} mateSpendings={mateSpendings} getCurrentExpenseData={getCurrentExpenseData}/>
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
        
        <View style={{flexDirection: 'row', marginHorizontal: '5%'}}>
          <View style={[styles.categories, {flex: 1}]}>
            <CategoryButtonView name="주거" focused={false} onPress={() => handlePress("공과금")} />
            <CategoryButtonView name="식비" focused={false} onPress={() => handlePress("식비")}  />
            <CategoryButtonView name="생활" focused={false}  onPress={() => handlePress("비품")} />
            <CategoryButtonView name="기타" focused={false} onPress={() => handlePress("기타")} />
          </View>
          <View style={{width: 30, justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={handleSearchFieldVisible}>
              <MagnifyingGlassIcon />
            </TouchableOpacity>
          </View>
        </View>
        
        { searchFieldVisivble && (
          <View style={[styles.searchContainer, {borderBottomColor: '#000', borderBottomWidth: 1}]}>
           <MagnifyingGlassIcon />
          </View>
        )}
        
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
                userColor={budget.userColor}
                userName={budget.userName}
                date={budget.date} 
                groupId={budget.groupId} 
                subCategory={budget.subCategory}  
                openModal={()=>openModal('edit')}
                setEditingBudget={handleEditingBudget}
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
      <TouchableOpacity onPress={()=>openModal('create')} style={{width: 50}}>
        <RoundPlusButtonView />
      </TouchableOpacity>
      </View>
      <RegisterBudgetModalContainer mode={modalMode} isVisible={modalVisible} onClose={closeModal} getBudgets={getBudgets} editingBudget={editingBudget}/>
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
