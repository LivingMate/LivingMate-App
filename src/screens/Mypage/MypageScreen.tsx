// MypageScreen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CustomSafeAreaView from '../../Components/CustomSafeAreaView';
import RoundedBox from '../../Components/RoundedBox';

const MypageScreen = () => {
  return (
  <CustomSafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <View>
      <Text>Hello, My Page!</Text>
      {/* 여기에 추가할 컴포넌트들을 추가합니다. */}
      </View>
    </ScrollView>
  </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default MypageScreen;
