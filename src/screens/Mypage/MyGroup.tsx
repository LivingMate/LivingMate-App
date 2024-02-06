import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PenIcon from '../../assets/icons/PenIcon';
import MateBox from '../../common/MateBox';
import { ScrollView } from 'react-native-gesture-handler';

interface MateProps {
  id: string;
  name: string;
  color: string;
}

interface MyGroupProps {
  groupId: string;
  groupName: string;
  groupMates: MateProps[];
  updateGroupNam?: (groupName: string) => void;
}

const MyMate: React.FC<MateProps> = ({ name, color }) => {
    return(
      <View style={styles.mateNameContainer}>
        <View 
            style={{
            backgroundColor: color,
            borderRadius: 100,
            width: 20,  
            height: 20}}
        >
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    )
}

const MyGroup: React.FC<MyGroupProps> = ({ groupName, groupMates, }) => {
  
  //group 수정 버튼 함수
  const buttonPress = () => {
    console.log('gruop 수정 버튼이 클릭되었습니다.');
  };

  return (
  <View style={styles.container}>   
    <View>
       {/* 그룹 이름 */}
      <View style={[styles.groupNameContainer]}>
        <View style={styles.groupNameTextContainer}>
          <Text style={styles.title}>{groupName}</Text>
        </View>
        <View style={styles.groupNamebuttonContainer}>
          <TouchableOpacity onPress={buttonPress}>
              <PenIcon/>
          </TouchableOpacity>
        </View>
      </View>
      {/* 그룹 메이트들 이름 */}
      <ScrollView>
      {
        groupMates.map((mate) => (
          <MyMate 
            key={mate.id.toString()}
            id={mate.id}
            name={mate.name} 
            color={mate.color} 
          />
        ))
      }
      </ScrollView>
    </View>

    {/* 그룹 메이트 */}
    
    
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  groupNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },

  groupNameTextContainer:{
    alignItems: 'flex-start',
    flex: 9,
  },

  groupNamebuttonContainer: {
    alignItems: 'flex-end',
    marginRight: 2,
    paddingBottom: 7
  },

  mateNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginBottom: 5,
  },

  text: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default MyGroup;


