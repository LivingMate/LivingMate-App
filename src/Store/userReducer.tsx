import { AnyAction } from "redux";

// reducers/userReducer.ts
const initialState: UserState = {
    user: null,
  };
  
  export interface UserState {
    user: User | null;
  }
  
  export interface User {
    username: string;
    // 다른 유저 정보 필드 추가
  }
  
  const userReducer = (state = initialState, action: AnyAction): UserState => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload };
      case 'LOGOUT':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  