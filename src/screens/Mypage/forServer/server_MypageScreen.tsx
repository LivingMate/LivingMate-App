import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../../../Components/Colors';
import CommonStyles from '../../../Components/CommonStyles';
import SendInvitedCode from '../SendInvitedCode';
import NoticificationIcon from '../../../Assets/Icons/NoticificationIcon';
import Profile from '../Profile';

const testUser = {
  id: '000000',
  name: '윤민지',
  color: 'blue',
  groupId: '001001',
  groupName: '청파메이트',
  groupMembers: [
    { name: '최지현', color: '#3f0f30'},
    { name: "박영희", color: '#fff000'},
  ],
}

interface User {
  id: string;
  name: string;
  color: string;
  groupId: string;
  groupName: string;
  groupMembers: Array<{ name: string, color: string;}>;
}

const MypageScreen: React.FC = () => {
  const [user, setUser] = useState<User>(testUser);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // API 호출을 통한 user 데이터 로딩
        const response = await fetch('https://example.com/api/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };
    fetchUserData();
  }, []);

   // 사용자 이름과 색상만 업데이트하는 함수
   const updateUserNameAndColor = async (newName: string, newColor: string) => {
    if (!user) return;

    try {
      const updatedUser = { ...user, name: newName, color: newColor };
      const response = await fetch('https://example.com/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        setUser(updatedUser); // 로컬 상태 업데이트
      }
    } catch (error) {
      console.error('Failed to update user data', error);
    }
  };

  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.safearea}>
          <View style={CommonStyles.section}>
              <ScrollView>

              {/* 프로필 */}
              <View style={[styles.generalBox, {marginTop: 50}]}>
                  <Profile 
                    name={user.name} 
                    color={user.color} 
                    updateUserNameAndColor={updateUserNameAndColor}
                  />
              </View>

              {/* 그룹 정보, 메이트들 */}
              <View style={styles.generalBox}>
                  <MyGroup />
              </View>

              {/* 그룹 관리 */}
              <View style={styles.generalBox}>
                  <GroupManaging />
              </View>
              {/* 이용안내 */}
              <View style={styles.generalBox}>
                  <Guidelines />
              </View>
                {/* logout */}
                <Logout />
              </ScrollView>
            </View>

            {/* roundBox */}
            <View style={[styles.roundBox, {height: 250}]}></View>
      </SafeAreaView>
    </View>
  );
}

const MyGroup = () => {
  return (
    <View>
      <Text style={styles.title}>청파메이트</Text>
      <Text style={styles.text}>최지현</Text>
      <Text style={styles.text}>박영희</Text>
    </View>
  );
}

const GroupManaging = () => {
  return (
    <View>
      <Text style={styles.title}>그룹 관리</Text>
      <Text style={styles.text}>초대 코드 보내기</Text>
      <Text style={styles.text}>단체 알림 보내기</Text>
      <Text style={styles.text}>그룹 탈퇴</Text>
    </View>
  );
}

const Guidelines = () => {
  return (
    <View>
      <Text style={styles.title}>이용 안내</Text>
      <Text style={styles.text}>개인정보 처리방침</Text>
      <Text style={styles.text}>서비스 이용약관</Text>
      <Text style={styles.text}>오픈소스 라이브러리</Text>
    </View>
  );
}

const Logout = () => {
  return (
    <View style={styles.LogoutBox}>
      <Text style ={styles.LogoutText}>로그아웃</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  roundBox: {
    zIndex: 1, // 낮은 zIndex로 뒤에 위치
    backgroundColor: Colors.theme,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    width: '100%', // 너비 
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 10,
  },

  generalBox: {
    backgroundColor: Colors.white,
    marginHorizontal: '5%',
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
  },

  text: {
    fontSize: 16,
    alignItems: 'flex-start',
    margin: 10,
  },

  LogoutBox:{
    width: '100%', 
    alignItems: 'center',
    margin: 10,
  },

  LogoutText:{
    color: Colors.text,
    fontSize: 15,
  }
});

export default MypageScreen;
