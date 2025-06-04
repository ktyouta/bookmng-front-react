import { useState } from 'react';
import { LOGIN_USER_INFO_INIT } from './Common/Const/CommonConst';
import { TOAST_INIT } from './Common/Component/ToastComponent';
import type { LoginUserInfoType } from './Common/Type/LoginUserInfoType';
import { useSelector } from 'react-redux';
import type { RootState } from './store';


function useQueryApp() {

    // ログインフラグ
    const isLogin = useSelector((state: RootState) => state.isLoginReducer);

    return {
        isLogin,
    }
}

export default useQueryApp;