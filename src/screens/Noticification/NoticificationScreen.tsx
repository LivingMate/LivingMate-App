// NoticificationScreen.tsx
import { Colors } from '../../Components/Colors';
import { Mystyles } from '../../Components/MyStyles';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const NoticificationScreen = () => {
  return (
    <View style={[Mystyles.container, { backgroundColor: Colors.background }]}>
      <Text>NoticificationScreen</Text>
      {/* 화면에 표시할 컴포넌트들을 추가 */}
    </View>
  );
};

export default NoticificationScreen;
