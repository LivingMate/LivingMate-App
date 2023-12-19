import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PenIcon from '../../../assets/Icons/PenIcon';
import MsgBalloon from '../../../assets/Icons/MsgBalloon';

interface MyGroupProps {
    groupName: string;
    groupMates: Array<{ name: string, color: string;}>;
    updateGroupName: (groupName: string) => void;
}

interface MateProps {
  name: string;
  color: string;
}

const Mate: React.FC<MateProps> = ({ name, color }) => {
  //mate 알림 버튼 함수
  const buttonPress = () => {
    console.log('mate 알림 버튼이 클릭되었습니다.');
  };

  return (
    <View style={styles.contentAndButoonContainer}>
    <View style={[styles.contentContainer, {marginLeft: 4}]}>
        <View style = {{
              backgroundColor: color,
              borderRadius: 8,
              margin: 5,
        }}>
        <Text style={styles.text}>{name}</Text>
        </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={buttonPress}>
          <MsgBalloon />
      </TouchableOpacity>
    </View>
    </View>
  );
};

const MyGroup: React.FC<MyGroupProps> = ({ groupName, groupMates, updateGroupName }) => {
    const [localGroupName, setGroupName] = useState(groupName);
  
    // 이름과 색상 변경 핸들러
    const handleSaveChanges = () => {
      updateGroupName(localGroupName);
    };
  
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
    <View>
        {groupMates.map((mate, index) => (
          <Mate key={index} name={mate.name} color={mate.color} />
        ))}
    </View>
    
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
    marginVertical: 10,
    marginHorizontal: 10,
  },

  text: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
    margin: 6,
  },

});

export default MyGroup;


