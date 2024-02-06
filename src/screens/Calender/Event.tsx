// PostView.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../common/Colors';
import ThreeDotsIcon from '../../assets/icons/ThreeDotsIcon';
import MateBox from '../../common/MateBox';
import EditAndDeleteButton from '../../common/EditAndDeleteButton';
import ThreeDotsButton from '../../common/ThreeDotsButton';

interface EventProps {
  id: number,
  userIds: string[],
  title: string;
  memo: string;
  date?: string;
  startTime: string;
  endTime: string;
  term: number;
  //onTogglePin: () => void;
}

const Event: React.FC<EventProps> = ({ id,  userIds, title, memo, term, startTime, endTime}) => {
  
  const [editButtonVisible, setEditButtonVisible] = useState(false);

  return(
  <View style={styles.generalBox}>
    {/* 담당자 Person in charge, PIC & 버튼(threeDots, 수정/삭제) */}
    <View style={styles.PICsAndButtonContainer}>
        {/* 담당자 Person in charge, PIC */}
        <View style={styles.PICsContainer}>
            {userIds.map((userId) => (
                <View style={{marginRight: 2}}>
                    <MateBox
                    userId={userId}
                    textSize={12}
                    showOnlyFirstLetter={false}
                    />
                </View>
            ))}
        </View>
            
        {/* 버튼(threeDots, 수정/삭제) */}
        <View>
            <ThreeDotsButton setEditButtonVisible={() => setEditButtonVisible(true)}/>
            {editButtonVisible && (
            <EditAndDeleteButton setEditButtonVisible={()=> setEditButtonVisible(false)}/>
            )}
        </View>
    </View>

        {/* 일정 시간, 루틴 여부 */}    
        <View style={styles.timeContainer}>
            {/* 일정 시작시간~종료시간 */}    
            <Text style={[styles.text, {fontSize: 16, marginVertical: 3}]}> {startTime} ~ {endTime}</Text>
            {/* 루틴 여부 표시. term > 0 일 경우만 노출 */}    
            { term > 0 && (
            <View style={styles.routineContainer}> 
                <Text style={[styles.text]}>루틴</Text>
            </View>
            )}
        </View>

        {/* 일정 내용 */}    
        <View style={styles.lineAndContentContainer}>
            <View style={styles.line}></View>
            <View style={[styles.contentContainer]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={[styles.text]}>{memo}</Text>
            </View>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  generalBox: {
    marginHorizontal: '5%',
    padding: 10,
  },

  PICsAndButtonContainer : {
    flexDirection: 'row',
    alignItems: 'center',
  },

  PICsContainer: {
    flex: 8,
    flexDirection:'row',
    alignItems: 'flex-start',
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 20,
    height: 20,
    borderRadius: 50,
  },

  timeContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 2,
  },

  routineContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    marginLeft: 5,
  },

  lineAndContentContainer: {
    flexDirection: 'row',
    paddingLeft: 5,
  },

  line: {
    borderWidth: 2,
    borderColor: Colors.text,
    borderRadius: 10,
  },

  contentContainer: {
   marginLeft: 7,
  },

  title: {
    fontSize: 16, 
    marginBottom: 5,
  },

  text: {
    fontSize: 14,
    color: '#000000',
  },
});

export default Event;


