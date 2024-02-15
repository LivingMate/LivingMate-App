import React from 'react';
import AuthNavigator, { AuthProvider } from './src/context/AuthContext';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Colors } from './src/common/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InitialStackNavigator from './src/navigations/InitialStackNavigator';


const App: React.FC = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer >  
      <View style={styles.container}>
      <InitialStackNavigator />
      </View>
    </NavigationContainer>
    </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, // 이 부분은 뷰가 전체 화면을 채우도록 합니다.
    backgroundColor: Colors.background, // 여기에 원하는 배경색을 설정합니다.
  },
});

export default App;
