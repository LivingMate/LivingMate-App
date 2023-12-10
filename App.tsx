// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from './src/Components/Colors';
import InitialStackNavigator from './src/Navigation/InitialStackNavigator';

const App: React.FC = () => {
  return (
      <NavigationContainer>
        <InitialStackNavigator /> 
       {/* <BottomTabNavigator />*/}
      </NavigationContainer>
  );
};

export default App;