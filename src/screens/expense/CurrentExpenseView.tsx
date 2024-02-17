import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../../common/CommonStyles';
import { Colors } from '../../common/Colors';
import AdjustedBudgetsInExpenseModalConatiner from './AdjustedBudgetsInExpenseModalConatiner';
import { CurrentExpenseViewProps } from './types';

const CurrentExpenseView: React.FC<CurrentExpenseViewProps> = ( {groupSum, groupAvg, mateSpendings} ) => {
  const [modalVisible, setModalVisible] = useState(false); // 모달의 표시 상태를 관리하는 state
  const openModal = () => setModalVisible(true); // 모달을 여는 함수
  const closeModal = () => setModalVisible(false); // 모달을 닫는 함수

  return (
    <View>
      {groupSum > 0 ? (
        <View>
         <View style={[CommonStyles.generalBox, {alignItems: 'center', paddingVertical: 25, paddingHorizontal: 15, flexDirection: 'row'}]}>
            {/* 총액 표출 */}
            <View style={styles.groupSumConatiner}>
              <Text style={styles.groupSumText}>{groupSum}</Text>
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
              mateSpendings={mateSpendings}
              groupAvg={groupAvg}
              groupSum={groupSum}
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

export default CurrentExpenseView;
