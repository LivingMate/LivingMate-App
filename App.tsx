import React from 'react';
import AuthNavigator, { AuthProvider } from './src/Context/AuthContext';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { Colors } from './src/Components/Colors';

const App: React.FC = () => (
    <NavigationContainer >      
      <BottomTabNavigator />
    </NavigationContainer>
);

export default App;
//<View style={{backgroundColor: Colors.background}}>