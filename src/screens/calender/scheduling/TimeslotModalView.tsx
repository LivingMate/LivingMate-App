import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Modal, Alert } from 'react-native';
import { SchedulingProps } from '../types';
import { Colors } from '../../../common/Colors';

interface TimeslotModalViewProps {
  isVisible: boolean;
  schedulingData: SchedulingProps,
  onClose: () => void;
  deleteScheduling: () => void;
}

const users: Record<string, { name: string, color: string }> = {
  '김예원': { name: '김예원', color: 'yellow' },
  '박준유': { name: '박준유', color: 'green' },
  '박시온': { name: '박시온', color: 'pink' },
};

const TimeslotModalView: React.FC<TimeslotModalViewProps> = ({isVisible, onClose, deleteScheduling, schedulingData}) => {
  
  const [activeUser, setActiveUser] = useState<string | null>(null);
  const dates2 = ["2024-02-01", "2024-02-04", "2024-02-11", "2024-02-30", "2024-02-31"];

  const boxHeight = '17%';

  const renderUserButtons = () => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.userButton, 
            { backgroundColor: 'grey' },
            activeUser === null && styles.activeUserButton
          ]}
          onPress={() => {setActiveUser(null)}}
        >
          <Text style={[styles.userButtonText]}>
            모두 </Text>
        </TouchableOpacity>
        {Object.keys(users).map(user => (
          <TouchableOpacity
            key={user}
            style={[
              styles.userButton, 
              { backgroundColor: users[user].color },
              activeUser === user && styles.activeUserButton,
            ]}
            onPress={() => setActiveUser(user)}
          >
            <Text style={styles.userButtonText}>{users[user].name}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  const handleDeleteScheduling = () => {
    Alert.alert(
      '',
      '일정조율이 종료되면 다시 확인하실 수 없습니다. 계속 하시겠습니까?',
      [ {  text: '취소', 
        },
        {  text: '확인', 
          onPress: deleteScheduling,
        }
      ],
      { cancelable: false }
    );
  }


  return (
    <Modal
    visible={isVisible}
    transparent
    animationType="fade"
    >
    <SafeAreaView style={styles.safeaArea}>
      {/* rounded box , 스크린 화살표*/}
      <View style={[styles.roundBox, {height: boxHeight}]}>
            <View style={{flex:1}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ffffff'}}>일정조율</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={onClose}
            >
                <Text style={{color: '#fff', fontSize: 18, marginRight: 10}}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDeleteScheduling}
            >
                <Text style={{color: '#fff', fontSize: 18}}>종료</Text>
            </TouchableOpacity>
            </View>
          </View>
       
    <View style={styles.content}>
        {/* content container*/}
          {/* title container*/}
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 9, justifyContent: 'center'}}>
                <Text style={[styles.title]}> 
                  {schedulingData.title}
                </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity>
                  <Text style={[styles.text, {fontSize: 18}]}>저장</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* timetable container*/}
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
              {/* 세로 스크롤을 하기 위한 컴포넌트. 지우지 말 것*/}
              <View />
              {/* timetable container*/}
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              
                <View style={{flex: 1, flexDirection: 'row'}}>  
                  
                  {/* timeslots content container*/}
                  <View style={{marginHorizontal: 5, marginTop: 7, flexDirection: 'row'}}>
                       {/* time table*/}
                  </View>
                </View>
              </View>
            </ScrollView> 
          </View>
        </View>    

      {/* participicants container*/} 
      <View style={styles.participicantsContainer}> 
        <View>
         <Text style={{fontSize: 15}}>참여자</Text>
        </View>        
        <ScrollView horizontal={true} contentContainerStyle={{flex: 1, flexDirection: 'row'}}>
          {renderUserButtons()}
        </ScrollView>
      </View> 
      
    </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  safeaArea: {
    flex: 1, 
    backgroundColor: '#EBF1F1',
    alignItems: 'center',
  },

  content: {
    marginTop: 80,
    height: '80%',
    width: '95%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10
  },

  buttonAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {

  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
    maxWidth: "100%",
  },

  text: {
    fontSize: 12,
    color: '#b5b5b5',
    alignItems: 'flex-start',
  },

  timeSlotContainer: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    width: '100%',
    flex: 1,
  },

  timeSlot: {
    width: '30%',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },

  timeText: {
    textAlign: 'center',
  },
  participicantsContainer: {
    width: '93%', 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  userButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 7,
  },

  userButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },

  activeUserButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'grey'
  },

  userButtonText: {
    textAlign: 'center',
    color: '#000000',
  },

  roundBox: {
    zIndex: 1, // 낮은 zIndex로 뒤에 위치
    backgroundColor: '#2F747B',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    width: '100%',
    height: 118,
    paddingTop: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
});

export default TimeslotModalView;