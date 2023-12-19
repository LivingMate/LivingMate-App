import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles';
import SendInvitedCode from './API/SendInvitedCode';

const MypageScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.safearea}>
          <View style={CommonStyles.section}>
              <ScrollView>
                  <Profile />
                  <MyGroup />
                  <GroupManaging />
                  <Guidelines />
                  <Logout />
              </ScrollView>
            </View>
            {/* roundBox */}
            <View style={[styles.roundBox, {height: 250}]}></View>
      </SafeAreaView>
    </View>
  );
}

const Profile = () => {
  return (
    <View style={[styles.generalBox, {marginTop: 50}]}>
      <Text style={styles.title}>윤민지</Text>
    </View>
  );
}

const MyGroup = () => {
  return (
    <View style={styles.generalBox}>
      <Text style={styles.title}>청파메이트</Text>
      <Text style={styles.text}>최지현</Text>
      <Text style={styles.text}>박영희</Text>
    </View>
  );
}

const GroupManaging = () => {
  return (
    <View style={styles.generalBox}>
      <Text style={styles.title}>그룹 관리</Text>
      <SendInvitedCode groupCode='00-00-00' />
      <Text style={styles.text}>단체 알림 보내기</Text>
      <Text style={styles.text}>그룹 탈퇴</Text>
    </View>
  );
}

const Guidelines = () => {
  return (
    <View style={styles.generalBox}>
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
