import { useEffect, useState } from 'react';
import { BOOK_MNG_PATH, LOGIN_USER_INFO_INIT } from './Common/Const/CommonConst';
import { TOAST_INIT } from './Common/Component/ToastComponent';
import type { LoginUserInfoType } from './Common/Type/LoginUserInfoType';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { on } from './Features/isCheckedAuthSlice';
import { offLoginFlg, onLoginFlg } from './Features/isLoginSlice';
import { resetLoginUserInfoAction, setLoginUserInfoAction } from './Features/loginUserInfoSlice';
import useMutationWrapper from './Common/Hook/useMutationWrapper';
import type { resType } from './Common/Hook/useMutationWrapperBase';
import ENV from "./env.json";


function useQueryApp() {

    // ログインフラグ
    const isLogin = useSelector((state: RootState) => state.isLoginReducer);
    const dispatch = useDispatch();
    // 認証チェック済みフラグ(setter)
    const setCheckedAuth = () => dispatch(on());
    // ログイン(オン)
    const setLogin = () => dispatch(onLoginFlg());
    // ログイン(オフ)
    const setLogout = () => dispatch(offLoginFlg());
    // ユーザー情報リセット
    const resetLoginUserInfo = () => dispatch(resetLoginUserInfoAction());
    // 認証チェック済みフラグ
    const isCheckedAuth = useSelector((state: RootState) => state.isCheckedAuthReducer);


    /**
     * 認証チェック
     */
    const postMutation = useMutationWrapper({
        url: `${BOOK_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo = res.data;

            dispatch(setLoginUserInfoAction(loginUserInfo));
            setLogin();
            setCheckedAuth();
        },
        // 失敗後の処理
        afErrorFn: () => {

            setLogout();
            setCheckedAuth();
            resetLoginUserInfo();
        },
    });

    useEffect(() => {
        postMutation.mutate();
    }, []);

    return {
        isLogin,
        isCheckedAuth,
    }
}

export default useQueryApp;