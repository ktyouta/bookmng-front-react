import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useEffect, useState } from "react";
import { SetLoginUserInfoContext } from "../../QueryApp";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { resType } from "../../Common/Hook/useMutationWrapperBase";
import { useDispatch, useSelector } from "react-redux";
import { on } from "../Features/isCheckedAuthSlice";
import { offLoginFlg, onLoginFlg } from "../../Login/Features/isLoginSlice";
import type { RootState } from "../../store";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";


export function useMain() {

    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    const dispatch = useDispatch();
    // 認証チェック済みフラグ(setter)
    const setCheckedAuth = () => dispatch(on());
    // ログイン(オン)
    const setLogin = () => dispatch(onLoginFlg());
    // ログイン(オフ)
    const setLogout = () => dispatch(offLoginFlg());

    /**
     * 認証チェック
     */
    const postMutation = useMutationWrapper({
        url: `${BOOK_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo = res.data;

            setLoginUserInfo(loginUserInfo);
            setLogin();
            setCheckedAuth();
        },
        // 失敗後の処理
        afErrorFn: () => {

            setLogout();
            setCheckedAuth();
        },
    });

    useEffect(() => {
        postMutation.mutate();
    }, []);
}