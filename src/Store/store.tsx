// store.ts
import { applyMiddleware, combineReducers, AnyAction, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk'; // Redux Thunk 미들웨어를 사용할 경우
import userReducer from './userReducer';

// Reducer를 import

const rootReducer = combineReducers({
  user: userReducer,
  // 다른 리듀서들 추가
});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk]; // Redux Thunk 미들웨어를 미들웨어 배열에 추가

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

// 비동기 액션에 대한 타입 정의
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
