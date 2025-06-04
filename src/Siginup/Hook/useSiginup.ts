import ENV from '../../env.json';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import useSwitch from '../../Common/Hook/useSwitch';
import { useRef, useState, type RefObject } from 'react';
import type { refType } from '../../Common/Component/BaseTextbox';
import { useNavigate } from 'react-router-dom';
import { SetLoginUserInfoContext } from '../../QueryApp';
import { useCreateYearList } from '../../Common/Hook/useCreateYearList';
import useMutationWrapper from '../../Common/Hook/useMutationWrapper';
import type { errResType, resType } from '../../Common/Hook/useMutationWrapperBase';
import type { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import type { SiginupRequestType } from '../Type/SiginupRequestType';
import { useDispatch } from 'react-redux';
import { onLoginFlg } from '../../Login/Features/isLoginSlice';
import { BOOK_MNG_PATH } from '../../Common/Const/CommonConst';


export function useSiginup() {

    // ユーザー名参照用
    const userNameRef = useRef<refType>(null);
    // パスワード参照用
    const userPasswordRef = useRef<refType>(null);
    // 生年月日(年)参照用
    const userBirthdayYearRef = useRef<refType>(null);
    // 生年月日(月)参照用
    const userBirthdayMonthRef = useRef<refType>(null);
    // 生年月日(日)参照用
    const userBirthdayDayRef = useRef<refType>(null);
    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 年リスト
    const yearCoomboList = useCreateYearList();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    const dispatch = useDispatch();
    // ログインフラグ
    const setLoggedIn = () => dispatch(onLoginFlg());

    /**
     * 登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${BOOK_MNG_PATH}${ENV.FRONT_USER_INFO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo = res.data;

            setLoginUserInfo(loginUserInfo);
            setLoggedIn();
            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            closeModal();
            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);
            userPasswordRef.current?.clearValue();
        },
    });

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            clickSiginupBtn();
        }
    };

    /**
     * 登録ボタン押下
     */
    function clickSiginupBtn() {

        const userName = userNameRef.current?.refValue as string;
        const password = userPasswordRef.current?.refValue as string;
        const userBirthday = `${userBirthdayYearRef.current?.refValue}${userBirthdayMonthRef.current?.refValue}${userBirthdayDayRef.current?.refValue}`;

        // ユーザーID未入力
        if (!userName) {
            setErrMessage(`ユーザー名が未入力です。`);
            return;
        }

        // パスワード未入力
        if (!password) {
            setErrMessage(`パスワードが未入力です。`);
            return;
        }

        // 生年月日未選択
        if (!userBirthday) {
            setErrMessage(`生年月日が未選択です。`);
            return;
        }

        // 登録確認用モーダルを展開
        openModal();
    }

    /**
     * 入力値のクリア
     */
    function clickClearBtn() {
        userNameRef.current?.clearValue();
        userPasswordRef.current?.clearValue();
    }

    /**
     * 戻るボタン押下
     */
    function clickBack() {
        navigate(ROUTER_PATH.LOGIN);
    }

    /**
     * アカウント登録実行
     */
    function executeSiginup() {

        const userName = userNameRef.current?.refValue as string;
        const password = userPasswordRef.current?.refValue as string;
        const birthday = `${userBirthdayYearRef.current?.refValue}${userBirthdayMonthRef.current?.refValue}${userBirthdayDayRef.current?.refValue}`;

        const body: SiginupRequestType = {
            userName,
            password,
            birthday,
        };

        // 登録リクエスト呼び出し
        postMutation.mutate(body);
    }

    return {
        userNameRef,
        userPasswordRef,
        clickSiginupBtn,
        clickClearBtn,
        handleKeyPress,
        errMessage,
        userBirthdayYearRef,
        userBirthdayMonthRef,
        userBirthdayDayRef,
        yearCoomboList,
        clickBack,
        isOpenModal,
        closeModal,
        executeSiginup,
    }
}