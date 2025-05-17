import { useState } from 'react';
import { LOGIN_USER_INFO_INIT } from './Common/Const/CommonConst';
import { TOAST_INIT } from './Common/Component/ToastComponent';
import type { LoginUserInfoType } from './Common/Type/LoginUserInfoType';


function useRootApp() {

    // ログインフラグ
    const [isLogin, setIsLogin] = useState(false);
    // ログインユーザー情報
    const [loginUserInfo, setLoginUserInfo] = useState<LoginUserInfoType>(LOGIN_USER_INFO_INIT);

    return {
        isLogin,
        setIsLogin,
        loginUserInfo,
        setLoginUserInfo,
    }
}

export default useRootApp;