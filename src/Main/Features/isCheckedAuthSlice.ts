import { createSlice } from "@reduxjs/toolkit";

// 認証チェック済みフラグ
const isCheckedAuthSlice = createSlice({
    name: 'isCheckedAuth',
    initialState: false,
    reducers: {
        on(state) {
            state = true;
        },
        off(state) {
            state = false;
        },
    },
});

export const { on, off } = isCheckedAuthSlice.actions;
export default isCheckedAuthSlice.reducer;