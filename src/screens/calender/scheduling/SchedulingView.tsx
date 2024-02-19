import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../../../common/CommonStyles';
import { Colors } from '../../../common/Colors';
import TimeslotModalContainer from './TimeslotModalContainer';
import { SchedulingProps } from '../types';
interface SchedulingViewProps {
  schedulingData: SchedulingProps,
  setIsScheduling: () => void,
}

const SchedulingView: React.FC<SchedulingViewProps> = ({schedulingData, setIsScheduling }) => {
  const [modalVisible, setModalVisible] = useState(false); // 모달의 표시 상태를 관리하는 state
  const openModal = () => setModalVisible(true); // 모달을 여는 함수
  const closeModal = () => setModalVisible(false); // 모달을 닫는 함수

  const formatDate = (date: string, index: number) => {
    let formattedDate = index!=0 ? ', '+date.substring(5) : date.substring(5); 
    return formattedDate;
  };

  const dates = schedulingData.dates;

  return (
      <View style={styles.container}>
            {/* */}
            <View style={styles.textConatiner}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap' }}>
              {dates.map((item, index) => (
                  <Text key={index}>{formatDate(item, index)}</Text>
              ))}
            </View>
              <Text style={styles.text}>일정조율</Text>
            </View>

            {/* 모달 버튼*/}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={openModal} >
                  <Text style={styles.buttonText}> 참여 </Text>
                </TouchableOpacity>
            </View>
            <TimeslotModalContainer 
              isVisible={modalVisible} 
              onClose={closeModal} 
              setIsScheduling={setIsScheduling}
              schedulingData={schedulingData}
            />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    marginVertical: 12,
    marginHorizontal: '7%',
    ...CommonStyles.shadow,
    alignItems: 'center',
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    flexDirection: 'row'
  },
  textConatiner : {
    flex: 1,
    paddingLeft: 10,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
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

export default SchedulingView;
