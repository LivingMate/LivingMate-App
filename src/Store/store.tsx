// store.ts
import { UnknownAction, configureStore } from '@reduxjs/toolkit';
import userGroupReducer from './userGroupSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userGroup: userGroupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function userReducer(state: unknown, action: UnknownAction): unknown {
    throw new Error('Function not implemented.');
}

