// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/Context/AuthContext';

import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './src/Context/AuthContext'; 
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import InitialStackNavigator from './src/Navigation/InitialStackNavigator';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
          ) : (
            <Stack.Screen name="InitialStackNavigator" component={InitialStackNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      </AuthProvider>
  );
};

export default App;
