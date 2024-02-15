// components/Login.tsx
import React, { useState } from 'react';
import LoginView from './LoginView';
import { addData } from '../../api/APIs';


const Login: React.FC = () => {

  const login = async (email: string, password: string) => {
    // JSON 데이터 생성
    const loggingUser = {
      email,
      password,
    };
    console.log('loggingUser will be sended: ', loggingUser);

    try {
      // addData 함수를 사용하여 서버에 POST 요청
      const path = ''; // 요청을 보낼 경로
      const response = await addData<typeof loggingUser, any>(path, loggingUser); // 여기서 응답 데이터 타입은 실제 응답에 맞게 수정해야 합니다.

      console.log('loggingUser 서버 응답:', response);

    } catch (error) {
      console.error('loggingUser 서버 요청 실패:', error);
    }
  };
  return (
   <LoginView login={login} />
  );
};

export default Login;
