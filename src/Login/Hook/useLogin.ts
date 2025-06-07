import { useEffect, useRef, useState, type RefObject } from "react";
import type { refType } from "../../Common/Component/BaseTextbox";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { LoginRequestType } from "../Type/LoginRequestType";
import ENV from "../../env.json";
import { onLoginFlg } from "../../Features/isLoginSlice";
import { useDispatch } from "react-redux";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { setLoginUserInfoAction } from "../../Features/loginUserInfoSlice";

export function useLogin() {

    // ユーザー名参照用
    const userNameRef = useRef<refType>(null);
    // パスワード参照用
    const userPasswordRef = useRef<refType>(null);
    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 遷移先(戻る)
    const [backPath, setBackPath] = useState(ROUTER_PATH.HOME.ROOT);
    // 遷移先(ログイン後)
    const [nextPath, setNextPath] = useState(ROUTER_PATH.HOME.ROOT);
    const dispatch = useDispatch();
    // ログイン
    const setLoggedIn = () => dispatch(onLoginFlg());

    useEffect(() => {

        const query = window.location.search;

        if (query && query.length > 0 && query.charAt(0) === `?`) {

            const params = new URLSearchParams(query);
            const backPathValue = params.get(`backpath`);
            const nextPathValue = params.get(`nextpath`);

            if (backPathValue) {
                setBackPath(backPathValue);
            }

            if (nextPathValue) {
                setNextPath(nextPathValue);
            }
        }

    }, []);

    /**
     * ログインリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${BOOK_MNG_PATH}${ENV.FRONT_USER_LOGIN}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo: LoginUserInfoType = res.data;

            dispatch(setLoginUserInfoAction(loginUserInfo));
            setLoggedIn();
            navigate(nextPath);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            //エラーメッセージを表示
            setErrMessage(`ログインに失敗しました。`);
            userPasswordRef.current?.clearValue();
        },
    });

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            clickLoginBtn();
        }
    };

    /**
     * ログインボタン押下
     */
    function clickLoginBtn() {

        // ユーザーID未入力
        if (!userNameRef.current?.refValue) {
            setErrMessage(`ユーザー名が未入力です。`);
            return;
        }

        // パスワード未入力
        if (!userPasswordRef.current?.refValue) {
            setErrMessage(`パスワードが未入力です。`);
            return;
        }

        const userName = userNameRef.current?.refValue as string;
        const password = userPasswordRef.current?.refValue as string;
        const body: LoginRequestType = {
            userName,
            password
        };

        //認証API呼び出し
        postMutation.mutate(body);
    }

    /**
     * 入力値のクリア
     */
    function clickClearBtn() {
        userNameRef.current?.clearValue();
        userPasswordRef.current?.clearValue();
    }

    /**
     * 会員登録画面遷移
     */
    function clickSignup() {
        navigate(ROUTER_PATH.SIGNUP);
    }

    /**
     * 戻るボタン
     */
    function clickBack() {
        navigate(backPath);
    }

    return {
        userNameRef,
        userPasswordRef,
        clickLoginBtn,
        clickClearBtn,
        handleKeyPress,
        errMessage,
        clickSignup,
        clickBack
    }
}