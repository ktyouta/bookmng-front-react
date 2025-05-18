import { configureStore } from '@reduxjs/toolkit';
import isLoginReducer from './Login/Features/isLoginSlice';


export const store = configureStore({
    reducer: {
        isLoginReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;