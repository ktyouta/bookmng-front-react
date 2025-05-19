import { createSlice } from "@reduxjs/toolkit";

// ログイン済みフラグ
const isLoginSlice = createSlice({
    name: 'isLogin',
    initialState: false,
    reducers: {
        on(state) {
            return true;
        },
        off(state) {
            return false;
        },
    },
});

export const { on, off } = isLoginSlice.actions;
export default isLoginSlice.reducer;