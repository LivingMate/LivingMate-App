import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../../common/CommonStyles';
import { Colors } from '../../common/Colors';
import AdjustedBudgetsInExpenseModalConatiner from './AdjustedBudgetsInExpenseModalConatiner';

const CurrentExpenseContainer: React.FC = () => {
  const [currentGroupSum, setCurrentGroupSum] = useState<number>(10);

  const [modalVisible, setModalVisible] = useState(false); // 모달의 표시 상태를 관리하는 state
  const openModal = () => setModalVisible(true); // 모달을 여는 함수
  const closeModal = () => setModalVisible(false); // 모달을 닫는 함수

  return (
    <View>
      {currentGroupSum > 0 ? (
        <View>
         <View style={[CommonStyles.generalBox, {alignItems: 'center', paddingVertical: 25, paddingHorizontal: 15, flexDirection: 'row'}]}>
            {/* 총액 표출 */}
            <View style={styles.groupSumConatiner}>
              <Text style={styles.groupSumText}>{currentGroupSum}</Text>
            </View>

            {/* 가계부 정산결과 모달 버튼*/}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={openModal} >
                  <Text style={styles.buttonText}> 정산하기 </Text>
                </TouchableOpacity>
            </View>
            <AdjustedBudgetsInExpenseModalConatiner
              visible={modalVisible} 
              onClose={closeModal}  
              
              mateSpendings={[ 
                {user: '카리나', userColor: 'red', spendingNet: 200000, spendingsOnAvg: 90000},
                {user: '윈터', userColor: 'orange', spendingNet: 160000, spendingsOnAvg: 50000},
                {user: '닝닝', userColor: 'blue', spendingNet: 80000, spendingsOnAvg: -30000},
                {user: '지젤', userColor: 'pink', spendingNet: 0, spendingsOnAvg: -110000}
              ]}
        
              groupAvg={110000}
              groupSum={440000}
            />
        </View>
        </View>
      ) : (
        <PlaceholderMessage msg='등록된 지출이 없습니다.' fontSize={18} />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  groupSumConatiner : {
    flex: 1,
    paddingLeft: 10,
  },
  groupSumText: {
    fontSize: 20
  },
  buttonContainer: {
    borderRadius: 7,
    backgroundColor: Colors.theme,
    justifyContent: 'center',
    alignItems: 'center',
    width: 74,
    height: 29,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  }
})

export default CurrentExpenseContainer;
