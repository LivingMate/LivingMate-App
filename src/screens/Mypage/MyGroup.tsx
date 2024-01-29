import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PenIcon from '../../Assets/Icons/PenIcon';
import MsgBalloon from '../../Assets/Icons/MsgBalloon';
import MateBox from '../../Components/MateBox';

interface MateProps {
  userId: string;
}

interface MyGroupProps {
  groupName: string;
  groupMates: MateProps[];
  updateGroupName: (groupName: string) => void;
}

const MyGroup: React.FC<MyGroupProps> = ({ groupName, groupMates, updateGroupName }) => {
  
    //group 수정 버튼 함수
    const buttonPress = () => {
        console.log('gruop 수정 버튼이 클릭되었습니다.');
    };

  return (
  <View style={styles.container}>

    {/* 그룹 이름 */}
    <View style={[styles.contentAndButoonContainer, {marginBottom: 5}]}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{groupName}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={buttonPress}>
            <PenIcon/>
        </TouchableOpacity>
      </View>
    </View>

    {/* 그룹 메이트 */}
    
    
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentAndButoonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  contentContainer:{
    alignItems: 'flex-start',
    flex: 9,
  },

  buttonContainer: {
    alignItems: 'flex-end',
    marginRight: 11,
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    margin: 10,
  },
});

export default MyGroup;


