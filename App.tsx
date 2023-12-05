// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Navigation/TabNavigator';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Colors } from './src/Components/Colors';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'blue', //Colors.screenBackground, // 배경색 설정
  },
});

export default App;