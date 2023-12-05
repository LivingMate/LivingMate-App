// MypageScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import CustomSafeAreaView from '../../Components/CustomSafeAreaView';

const MypageScreen = () => {
  return (
  <CustomSafeAreaView>
    <View>
      <Text>MypageScreen</Text>
      {/* 화면에 표시할 컴포넌트들을 추가 */}
    </View>
  </CustomSafeAreaView>
  );
};

export default MypageScreen;
