import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';

const CustomSafeAreaView: React.FC<SafeAreaViewProps> = ({ children }) => {
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 0,
    flexDirection: 'row', // 가로 방향으로 설정
    borderColor: 'red',
    borderWidth: 1,
  },
  innerContainer: {
    paddingHorizontal: 16,
    flex: 1,
    padding: 10,
    flexDirection: 'row', // 가로 방향으로 설정
    borderColor: 'blue',
    borderWidth: 1,
  },
});

export default CustomSafeAreaView;
