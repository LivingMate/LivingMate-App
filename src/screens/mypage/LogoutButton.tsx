import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../auth/AuthContext';
import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LogoutButton: React.FC = () => {
  const { signOut } = useAuth(); // useAuth hook 사용하여 signOut 함수 가져오기
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOut(); // 로그아웃 함수 호출
      navigation.navigate('Initial' as never);
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleLogout} // 로그아웃 함수를 호출하는 이벤트 핸들러 연결
      style={{width: '100%', alignItems: 'center', marginVertical: 10}}
    >
      <Text style={{fontSize: 14, color: '#b5b5b5'}}>로그아웃</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
