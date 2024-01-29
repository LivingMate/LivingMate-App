// components/Login.tsx
import { RootState } from '../../Store/store';
import { loginSuccess } from '../../Store/userAction';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<string>('');

  const handleLogin = () => {
    // 로그인 로직 처리 후 유저 정보를 저장
    const userInfo: RootState['user']['user'] = { username: user, /* other user info */ };
    dispatch(loginSuccess(userInfo));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
