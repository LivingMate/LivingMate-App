// LoginContainer.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const LoginContainer: React.FC = () => {
  const navigation = useNavigation();

  const handleGoogleLogin = () => {
    try {
      // 구글 로그인 처리 코드 (예: react-native-google-signin 등을 사용)
      // 로그인이 성공하면 EntryGroupScreen으로 이동
      navigation.navigate('EntryGroup' as never);
    } catch (error) {
      // 로그인 실패 처리
      console.error('Google 로그인 에러:', error);
    }
  };

  return <LoginScreen onGoogleLogin={handleGoogleLogin} />;
};

export default LoginContainer;
