import { configureStore } from '@reduxjs/toolkit';
import isLoginReducer from './Login/Features/isLoginSlice';
import isCheckedAuthReducer from './Main/Features/isCheckedAuthSlice';


export const store = configureStore({
    reducer: {
        isLoginReducer,
        isCheckedAuthReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;