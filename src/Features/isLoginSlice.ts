import { createSlice } from "@reduxjs/toolkit";

// ログイン済みフラグ
const isLoginSlice = createSlice({
    name: 'isLogin',
    initialState: false,
    reducers: {
        onLoginFlg(state) {
            return true;
        },
        offLoginFlg(state) {
            return false;
        },
    },
});

export const { onLoginFlg, offLoginFlg } = isLoginSlice.actions;
export default isLoginSlice.reducer;