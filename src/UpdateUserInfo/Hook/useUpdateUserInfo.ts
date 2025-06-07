import { useRef, useState, type RefObject } from "react";
import type { refType } from "../../Common/Component/BaseTextbox";
import { useNavigate } from "react-router-dom";
import { useCreateYearList } from "../../Common/Hook/useCreateYearList";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import ENV from "../../env.json";
import type { UpdateUserInfoRequestType } from "../Type/UpdateUserInfoRequestType";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setLoginUserInfoAction } from "../../Features/loginUserInfoSlice";


export function useUpdateUserInfo() {

    // ユーザー名参照用
    const userNameRef = useRef<refType>(null);
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
    // 年リスト
    const yearCoomboList = useCreateYearList();
    // ログインユーザー情報
    const loginUserInfo = useSelector((state: RootState) => state.loginUserInfoSlice);
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    const dispatch = useDispatch();

    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${BOOK_MNG_PATH}${ENV.FRONT_USER_INFO}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo = res.data;

            toast.success("ユーザー情報を更新しました。");
            dispatch(setLoginUserInfoAction(loginUserInfo));
            navigate(ROUTER_PATH.HOME.ROOT);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            closeModal();
            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);
        },
    });


    /**
     * 保存ボタン押下
     */
    function clickUpdateUserInfoBtn() {

        const userName = userNameRef.current?.refValue as string;
        const userBirthday = `${userBirthdayYearRef.current?.refValue}${userBirthdayMonthRef.current?.refValue}${userBirthdayDayRef.current?.refValue}`;

        // ユーザーIDが存在しない
        if (!loginUserInfo.userId) {
            setErrMessage(`ユーザー情報を更新できません。`);
            return;
        }

        // ユーザーID未入力
        if (!userName) {
            setErrMessage(`ユーザー名が未入力です。`);
            return;
        }

        // 生年月日未選択
        if (!userBirthday) {
            setErrMessage(`生年月日が未選択です。`);
            return;
        }

        // 確認用モーダルを展開する
        openModal();
    }

    /**
     * キャンセルボタン押下
     */
    function clickCancel() {
        navigate(ROUTER_PATH.HOME.ROOT);
    }

    /**
     * ユーザー情報更新実行
     */
    function executeUpdate() {

        const userName = userNameRef.current?.refValue as string;
        const birthday = `${userBirthdayYearRef.current?.refValue}${userBirthdayMonthRef.current?.refValue}${userBirthdayDayRef.current?.refValue}`;

        const body: UpdateUserInfoRequestType = {
            userName,
            birthday,
        };

        // 更新リクエスト呼び出し
        postMutation.mutate(body);
    }

    return {
        userNameRef,
        clickUpdateUserInfoBtn,
        errMessage,
        userBirthdayYearRef,
        userBirthdayMonthRef,
        userBirthdayDayRef,
        yearCoomboList,
        loginUserInfo,
        clickCancel,
        isOpenModal,
        closeModal,
        executeUpdate,
    }
}