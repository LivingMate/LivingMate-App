import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlaceholderMessage from '../../Components/PlaceholderMessage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../../Components/CommonStyles';
import { Colors } from '../../Components/Colors';
import AdjustedBudgetInExpenseModal from './AdjustedBudgetInExpenseModal';

const CurrentExpense: React.FC = () => {
  const [currentGroupSum, setCurrentGroupSum] = useState<number>(10);

  const [modalVisible, setModalVisible] = React.useState(false); // 모달의 표시 상태를 관리하는 state
  const openModal = () => setModalVisible(true); // 모달을 여는 함수
  const closeModal = () => setModalVisible(false); // 모달을 닫는 함수

  return (
    <View>
      {currentGroupSum > 0 ? (
        <View>
         <View style={[CommonStyles.generalBox, {alignItems: 'center', paddingVertical: 25, paddingHorizontal: 15, flexDirection: 'row'}]}>
            {/* 총액 표출 */}
            <View style={styles.groupSumConatiner}>
              <Text style={styles.groupSumText}>총 470,440원</Text>
            </View>

            {/* 가계부 정산결과 모달 버튼*/}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={openModal} >
                  <Text style={styles.buttonText}> 정산하기 </Text>
                </TouchableOpacity>
            </View>
            <AdjustedBudgetInExpenseModal 
              visible={modalVisible} 
              onClose={closeModal}  
              
              mateSpendings={[ {user: '박시온', spendingNet: 140150, spendingsOnAvg: 16650},
                {user: '박준유', spendingNet: 200750, spendingsOnAvg: -43950},
                {user: '김예원', spendingNet: 129500, spendingsOnAvg: 27300}
              ]}
        
              groupAvg={156800}
              groupSum={470440}
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

export default CurrentExpense;
