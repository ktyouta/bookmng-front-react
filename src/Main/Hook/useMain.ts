import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useEffect, useState } from "react";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { resType } from "../../Common/Hook/useMutationWrapperBase";
import { useDispatch, useSelector } from "react-redux";
import { on } from "../../Features/isCheckedAuthSlice";
import { offLoginFlg, onLoginFlg } from "../../Features/isLoginSlice";
import type { RootState } from "../../store";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { resetLoginUserInfoAction, setLoginUserInfoAction } from "../../Features/loginUserInfoSlice";


export function useMain() {

    const dispatch = useDispatch();
    // 認証チェック済みフラグ(setter)
    const setCheckedAuth = () => dispatch(on());
    // ログイン(オン)
    const setLogin = () => dispatch(onLoginFlg());
    // ログイン(オフ)
    const setLogout = () => dispatch(offLoginFlg());
    // ユーザー情報リセット
    const resetLoginUserInfo = () => dispatch(resetLoginUserInfoAction());


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
}