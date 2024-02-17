import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../auth/AuthContext';
import React from 'react';
import { Button } from 'react-native';

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
    <Button
      title="로그아웃"
      onPress={handleLogout} // 로그아웃 함수를 호출하는 이벤트 핸들러 연결
    />
  );
};

export default LogoutButton;
