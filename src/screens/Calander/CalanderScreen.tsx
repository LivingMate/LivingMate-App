// CalanderScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import CustomSafeAreaView from '../../Components/CustomSafeAreaView';
import { Colors } from '../../Components/Colors'

const CalanderScreen = () => {
  return (
  <View style={styles.container}>
  <CustomSafeAreaView>
    <View>
      <Text>CalanderScreen</Text>
      {/* 화면에 표시할 컴포넌트들을 추가 */}
    </View>
  </CustomSafeAreaView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight, // 안드로이드에서는 상태 표시줄 고려
  },
});

export default CalanderScreen;

