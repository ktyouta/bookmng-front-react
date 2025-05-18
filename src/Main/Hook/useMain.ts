import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useState } from "react";
import { SetIsLoginContext, SetLoginUserInfoContext } from "../../QueryApp";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { resType } from "../../Common/Hook/useMutationWrapperBase";


export function useMain() {

    // ログインフラグ
    const setIsLogin = SetIsLoginContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 認証チェック済みフラグ
    const [isCheckedAuth, setIsCheckedAuth] = useState(false);

    // 認証チェック
    useQueryWrapper(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`,
            afSuccessFn: (res: resType<LoginUserInfoType>) => {

                const loginUserInfo = res.data;

                setLoginUserInfo(loginUserInfo);
                setIsLogin(true);
                setIsCheckedAuth(true);
            },
            afErrorFn: (res) => {
                setIsLogin(false);
                setIsCheckedAuth(true);
            },
            method: "POST",
        }
    );

    return {
        isCheckedAuth,
    }
}