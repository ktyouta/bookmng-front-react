import { createSlice } from "@reduxjs/toolkit";


const isLoginSlice = createSlice({
    name: 'isLogin',
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

export const { on, off } = isLoginSlice.actions;
export default isLoginSlice.reducer;