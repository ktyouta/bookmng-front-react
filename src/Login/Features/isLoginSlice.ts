import { createSlice } from "@reduxjs/toolkit";

// ログイン済みフラグ
const isLoginSlice = createSlice({
    name: 'isLogin',
    initialState: false,
    reducers: {
        onLoginFlg(state) {
            console.log(`aaaaaaaaaaa`);
            return true;
        },
        offLoginFlg(state) {
            console.log(`bbbbbbbbb`);

            return false;
        },
    },
});

export const { onLoginFlg, offLoginFlg } = isLoginSlice.actions;
export default isLoginSlice.reducer;