//EntryGroupScreen.tsx
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { Colors } from '../../Components/Colors';

interface EntryGroupScreenProps {
  onEntry: () => void;
  isLoggedIn: () => void;
}

const EntryGroupScreen: React.ComponentType<EntryGroupScreenProps> = ({ onEntry, isLoggedIn }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.msgText}>함께 사는 메이트를 초대하고{'\n'}생활을 편리하게 관리해보세요!</Text>
        <TouchableOpacity style={styles.invitingButton} onPress={onEntry}>
          <Text style={styles.invitingText}>메이트 그룹 만들고 초대하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.invitedButton} onPress={onEntry}>
          <Text style={styles.invitiedText}>또는 초대코드로 참여하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={isLoggedIn}>
          <Text style={styles.LogoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, //면적 차지 비율
      justifyContent: 'center', //세로 정렬 기준
      alignItems: 'center', //가로 정렬 기준
      backgroundColor: Colors.background,
      padding: 10, //컴포넌트 내부 여백
    },
    msgText:{
      fontSize: 23,
      textAlign: "center", //텍스트 가로 정렬
      //fontWeight: 200, 폰트 굵기
      marginTop: 180,
    },
    invitingButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.theme,
      padding: 10,
      width: 275,
      height: 65,
      borderRadius: 56, //모서리 둥글기 정도
      marginTop: 100, //컴포넌트 외부 위쪽 top 여백 
    },
    invitingText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.white,
    },
    invitedButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.white,
      text: Colors.theme,
      padding: 10,
      width: 275,
      height: 65,
      borderRadius: 56,
      marginTop: 10,
      marginBottom: 100,
    },
    invitiedText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.theme,
    },
    LogoutText:{
      color: Colors.text,
      fontSize: 15,
    }
  });

export default EntryGroupScreen;


