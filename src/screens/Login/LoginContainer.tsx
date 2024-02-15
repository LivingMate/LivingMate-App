// components/Login.tsx
import React, { useState } from 'react';
import LoginScreen from './LoginScreen';

const Login: React.FC = () => {

  const [user, setUser] = useState<string>('');
  return (
   <LoginScreen  />
  );
};

export default Login;
