import React from 'react';
import AuthNavigator, { AuthProvider } from './src/Context/AuthContext';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Colors } from './src/Components/Colors';

const App: React.FC = () => (
    <NavigationContainer >  
      <View style={styles.container}>
        <BottomTabNavigator />
      </View>
    </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, // 이 부분은 뷰가 전체 화면을 채우도록 합니다.
    backgroundColor: '#EBF1F1', // 여기에 원하는 배경색을 설정합니다.
  },
});

export default App;
