import { configureStore } from '@reduxjs/toolkit';
import isLoginReducer from './Features/isLoginSlice';
import isCheckedAuthReducer from './Features/isCheckedAuthSlice';
import loginUserInfoSlice from './Features/loginUserInfoSlice';


export const store = configureStore({
    reducer: {
        isLoginReducer,
        isCheckedAuthReducer,
        loginUserInfoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;