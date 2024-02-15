import React from 'react';
import SignupView from './SignupView';
import { addData } from '../../api/APIs';

const SignupContainer = () => {
  
  const signup = async (email: string, password: string, userName: string, birth: string, sex: string) => {
      // JSON 데이터 생성
      const newUser = {
        email,
        password,
        userName,
        birth,
        sex,
      };
      console.log('handleSignup Data will be sended: ', newUser);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = '/signup'; // 요청을 보낼 경로
        const response = await addData<typeof newUser, any>(path, newUser);
        console.log('handleSignup 서버 응답:', response);
      } catch (error) {
        console.error('handleSignup 서버 요청 실패:', error);
      }
  };

  return (  
    <SignupView signup={signup}/>
  )
}

export default SignupContainer;