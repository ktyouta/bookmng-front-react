import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useState } from "react";
import { SetLoginUserInfoContext } from "../../QueryApp";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { resType } from "../../Common/Hook/useMutationWrapperBase";
import { useDispatch, useSelector } from "react-redux";
import { on } from "../Features/isCheckedAuthSlice";
import { onLoginFlg } from "../../Login/Features/isLoginSlice";
import type { RootState } from "../../store";


export function useMain() {

    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    const dispatch = useDispatch();
    // 認証チェック済みフラグ(setter)
    const setCheckedAuth = () => dispatch(on());
    // ログイン(オン)
    const setLogin = () => dispatch(onLoginFlg());
    // ログイン(オフ)
    const setLogout = () => dispatch(onLoginFlg());

    // 認証チェック
    useQueryWrapper(
        {
            url: `${BOOK_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`,
            afSuccessFn: (res: resType<LoginUserInfoType>) => {

                const loginUserInfo = res.data;

                setLoginUserInfo(loginUserInfo);
                setLogin();
                setCheckedAuth();
            },
            afErrorFn: (res) => {
                setLogout();
                setCheckedAuth();
            },
            method: "POST",
        }
    );
}