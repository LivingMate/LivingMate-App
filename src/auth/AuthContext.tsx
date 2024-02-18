// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../api/APIs';

interface AuthContextType {
  userToken: string | null;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
  //getUser: () => Promise<void>;
  canUpdateTodos: (updateTodos: string)  => Promise<void>;
}
// 초기 상태와 함께 Context 생성
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userId, userColor] = useState<string | null>(null);
  const [updateTodos, setUpdateTodos] = useState<string | null>();

  const signIn = async (token: string) => {
    // 토큰 저장 로직
    try {
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    } catch (e) {
      console.error('Failed to sign in', e);
    }
  };

  const signOut = async () => {
    // 토큰 제거 로직
    try {
      await AsyncStorage.removeItem('userToken');
      console.log('logout sucess')
      setUserToken(null);
    } catch (e) {
      console.error('Failed to sign out', e);
    }
  };

  const canUpdateTodos= async (updateTodos: string) => {
    // 토큰 저장 로직
    try {
      await AsyncStorage.setItem('updateTodos', updateTodos);
      setUpdateTodos(updateTodos);
    } catch (e) {
      console.error('Failed to updateTodos', e);
    }
  };

  useEffect(() => {
    // 앱 시작 시 토큰 로드
    const bootstrapAsync = async () => {
      let token: string | null = null;
      try {
        token = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // 토큰 로드 실패 처리
        console.error('Failed to load token', e);
      }
      setUserToken(token);
    };
    bootstrapAsync();

  }, []);

  return (
    <AuthContext.Provider value={{ userToken, signIn, signOut, canUpdateTodos}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

export default AuthProvider;
