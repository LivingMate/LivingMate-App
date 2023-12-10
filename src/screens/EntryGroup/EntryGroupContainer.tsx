// EntryGroupContainer.tsx
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import EntryGroupScreen from './EntryGroupScreen';

const EntryGroupContainer: React.FC = () => {
  const navigation = useNavigation();

  const handleEntryGroup = () => {
    try {
      // 구글 로그인 처리 코드 (예: react-native-google-signin 등을 사용)
      // 로그인이 성공하면 EntryGroupScreen으로 이동
      navigation.navigate('Home' as never);
    } catch (error) {
      // 로그인 실패 처리
      console.error('EntryGroup error:', error);
    }
  };

  return <EntryGroupScreen onEntry={handleEntryGroup} />;
};

export default EntryGroupContainer;
