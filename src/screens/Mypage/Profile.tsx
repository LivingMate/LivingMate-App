import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GearIcon from '../../../assets/Icons/GearIcon';

interface ProfileProps {
    name: string,
    color: string,
    updateUserNameAndColor: (name: string, color: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ name, color, updateUserNameAndColor }) => {
    const [localName, setLocalName] = useState(name);
    const [localColor, setLocalColor] = useState(color);
  
    // 이름과 색상 변경 핸들러
    const handleSaveChanges = () => {
      updateUserNameAndColor(localName, localColor);
    };
  
    //프로필 수정 버튼 함수
    const profileButtonPress = () => {
        console.log('profile 수정 버튼이 클릭되었습니다.');
    };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View 
            style={{
            backgroundColor: color,
            borderRadius: 100,
            width: 25,  
            height: 25}}
        >
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={profileButtonPress}>
            <GearIcon />
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center',
  },

  contentContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 9,
    justifyContent: 'flex-start'
  },

  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Profile;
