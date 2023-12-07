// MypageScreen.tsx
import { Colors } from '../../Components/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mystyles } from '../../Components/MyStyles';

const MypageScreen = () => {
  return (
   // <SafeAreaView>
      <View style={[Mystyles.container, { backgroundColor: Colors.background }]}>
        <Text>"MYPAGE"</Text>
      </View>
   // </SafeAreaView>
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
