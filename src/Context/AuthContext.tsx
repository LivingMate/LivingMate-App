import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';
import InitialStackNavigator from '../Navigation/InitialStackNavigator';

// AuthContextType 정의
type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

// AuthContext 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider 컴포넌트의 props 타입 정의
type AuthProviderProps = {
  children: ReactNode;
};

// AuthProvider 컴포넌트 정의
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// useAuth 훅 정의
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// 스택 네비게이터 생성
const Stack = createStackNavigator();

// AuthNavigator 컴포넌트 정의
const AuthNavigator: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name="InitialStackNavigator" component={InitialStackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator