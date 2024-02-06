import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import SendInvitedCode from './SendInvitedCode';
import db from '../../../db.json';
import Profile from './Profile';
import MyGroup from './MyGroup';
import matesData from './TestData';

interface User {
  //id: string;
  name: string;
  color: string;
  groupId: string;
  groupName: string;
  groupMates: Array<{ id?: string, name: string, color: string;}>;
}

const MypageContainer: React.FC = () => {
  const [user, setUser] = useState<User>();

  const mates = [
    {id: 'asdf125', name: '최지현', color: '#c96d00'},
    {id: 'asdf124', name: '박영희', color: '#1e64eb'},
    {id: 'asdf123', name: '박시온', color: '#c900eb'},
  ]
  /* 사용자 이름과 색상만 업데이트하는 함수
  const updateUserNameAndColor = (newName: string, newColor: string) => {
    // API 요청 대신 로컬 상태를 직접 업데이트
    const updatedUser = { ...user, name: newName, color: newColor };
    setUser(updatedUser);
  };

  // 그룹 이름만 업데이트하는 함수
  const updateGroupName = (newGroupName: string) => {
    // API 요청 대신 로컬 상태를 직접 업데이트
    const updatedUser = { ...user, name: newGroupName};
    setUser(updatedUser);
  }; */

  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={CommonStyles.safearea}>
          <View 
            style={[CommonStyles.section, {minHeight: 700}]}
          >
              <ScrollView>
              {/* 프로필 */}
              <View style={[CommonStyles.generalBox, {marginTop: 30}]}>
                  <Profile 
                    name='윤민지' 
                    color='#cd6363' 
                    
                  />
              </View>

              {/* 그룹 정보, 메이트들 */}
              <View style={CommonStyles.generalBox}>
                  <MyGroup 
                    groupId='aaaaaa'
                    groupName='청파메이트'
                    groupMates={mates}
                  />
              </View>

              {/* 그룹 관리 */}
              <View style={CommonStyles.generalBox}>
                  <GroupManaging />
              </View>
              {/* 이용안내 */}
              <View style={CommonStyles.generalBox}>
                  <Guidelines />
              </View>
                
              </ScrollView>
            </View>

            {/* roundBox */}
            <View style={[styles.roundBox, {height: 250}]}></View>
      </SafeAreaView>
    </View>
  );
}

const GroupManaging = () => {
  return (
    <View>
      <Text style={styles.title}>그룹 관리</Text>
      <TouchableOpacity>
        <Text style={styles.text}>초대 코드 보내기</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>단체 알림 보내기</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>그룹 탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
}

const Guidelines = () => {
  return (
    <View>
      <Text style={styles.title}>이용 안내</Text>
      <TouchableOpacity>
        <Text style={styles.text}>개인정보 처리방침</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>서비스 이용약관</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>오픈소스 라이브러리</Text>
      </TouchableOpacity>
    </View>
  );
}

const Logout = () => {
  return (
    <View style={styles.LogoutBox}>
      <TouchableOpacity>
      <Text style ={styles.LogoutText}>로그아웃</Text>
      </TouchableOpacity>
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

export default MypageContainer;
