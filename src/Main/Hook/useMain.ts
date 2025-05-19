import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useState } from "react";
import { SetIsLoginContext, SetLoginUserInfoContext } from "../../QueryApp";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { resType } from "../../Common/Hook/useMutationWrapperBase";
import { useDispatch, useSelector } from "react-redux";
import { on } from "../Features/isCheckedAuthSlice";
import type { RootState } from "../../store";


export function useMain() {

    // ログインフラグ
    const setIsLogin = SetIsLoginContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    const dispatch = useDispatch();
    // 認証チェック済みフラグ(setter)
    const setCheckedAuth = () => dispatch(on());

    // 認証チェック
    useQueryWrapper(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`,
            afSuccessFn: (res: resType<LoginUserInfoType>) => {

                const loginUserInfo = res.data;

                setLoginUserInfo(loginUserInfo);
                setIsLogin(true);
                setCheckedAuth();
            },
            afErrorFn: (res) => {
                setIsLogin(false);
                setCheckedAuth();
            },
            method: "POST",
        }
    );
}