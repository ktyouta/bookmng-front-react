import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from '../../env.json';
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { LoginUserInfoContext, SetLoginUserInfoContext } from "../../QueryApp";
import { LOGIN_USER_INFO_INIT } from "../../Common/Const/CommonConst";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { offLoginFlg } from "../../Login/Features/isLoginSlice";


export function useHeaderUserMenu() {

    //ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = useSelector((state: RootState) => state.isLoginReducer);
    const dispatch = useDispatch();
    // ログアウト
    const setLogout = () => dispatch(offLoginFlg());
    //ナビゲーション表示フラグ
    const { flag: isOpenUserMenu,
        on: oepnUserMenu,
        off: closeUserMenu } = useSwitch();
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 認証チェック済みフラグ
    const isCheckedAuth = useSelector((state: RootState) => state.isCheckedAuthReducer);

    /**
     * ログアウトリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FRONT_USER_LOGOUT}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: () => {

            setLoginUserInfo(LOGIN_USER_INFO_INIT);
            setLogout();
            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`ログアウトに失敗しました。再度お試しください。`);
        },
    });


    /**
     * ログインボタン押下イベント
     */
    function clickLogin() {
        navigate(ROUTER_PATH.LOGIN);
    }

    /**
     * ログアウト
     */
    function clickLogout() {
        postMutation.mutate();
    }

    /**
     * ユーザー情報更新画面遷移
     */
    function clickUpdateUserInfo() {
        navigate(ROUTER_PATH.UPDATE_USER_INFO);
    }

    /**
     * ユーザーパスワード更新画面遷移
     */
    function clickUpdateUserPassword() {
        navigate(ROUTER_PATH.UPDATE_USER_PASSWORD);
    }

    return {
        clickLogin,
        isLogin,
        isOpenUserMenu,
        oepnUserMenu,
        closeUserMenu,
        clickLogout,
        loginUserInfo,
        clickUpdateUserInfo,
        clickUpdateUserPassword,
        isCheckedAuth,
    }
}