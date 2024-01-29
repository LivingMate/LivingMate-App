// actions/userActions.ts
import { User } from './userReducer';

export const loginSuccess = (user: User) => ({
  type: 'LOGIN_SUCCESS' as const,
  payload: user,
});

export const logout = () => ({
  type: 'LOGOUT' as const,
});
