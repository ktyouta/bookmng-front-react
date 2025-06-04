import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginUserInfoType } from "../Common/Type/LoginUserInfoType";

// ログインユーザー情報初期値
const LOGIN_USER_INFO_INIT: LoginUserInfoType = {
    userName: ``,
    birthday: ``,
}

// ログインユーザー情報
const loginUserInfoSlice = createSlice({
    name: 'loginUserInfo',
    initialState: LOGIN_USER_INFO_INIT,
    reducers: {
        setLoginUserInfoAction(state, action: PayloadAction<LoginUserInfoType>) {
            return action.payload;
        },
        resetLoginUserInfoAction(state) {
            return LOGIN_USER_INFO_INIT;
        },
    },
});

export const { setLoginUserInfoAction, resetLoginUserInfoAction } = loginUserInfoSlice.actions;
export default loginUserInfoSlice.reducer;