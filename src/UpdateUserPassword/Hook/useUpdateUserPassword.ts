import { useRef, useState, type RefObject } from "react";
import type { refType } from "../../Common/Component/BaseTextbox";
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import type { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import type { UpdateUserPasswordRequestType } from "../Type/UpdateUserPasswordRequestType";
import ENV from "../../env.json";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";


export function useUpdateUserPassword() {

    // 現在のパスワード参照用
    const currentPasswordRef = useRef<refType>(null);
    // 新しいパスワード参照用
    const newPasswordRef = useRef<refType>(null);
    // 確認用パスワード参照用
    const confirmPasswordRef = useRef<refType>(null);
    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報
    const loginUserInfo = useSelector((state: RootState) => state.loginUserInfoSlice);
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();

    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${BOOK_MNG_PATH}${ENV.FRONT_USER_PASSWORD}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            toast.success("パスワードを更新しました。");
            navigate(ROUTER_PATH.HOME);
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

        const currentPassword = currentPasswordRef.current?.refValue as string;
        const newPassword = newPasswordRef.current?.refValue as string;
        const confirmPassword = confirmPasswordRef.current?.refValue as string;

        // ユーザーIDが存在しない
        if (!loginUserInfo.userId) {
            setErrMessage(`パスワードを更新できません。再度ログインし直してください。`);
            return;
        }

        // 現在のパスワード未入力
        if (!currentPassword) {
            setErrMessage(`現在のパスワードが未入力です。`);
            return;
        }

        // 新しいパスワード未入力
        if (!newPassword) {
            setErrMessage(`新しいパスワードが未入力です。`);
            return;
        }

        // 確認用パスワード未入力
        if (!confirmPassword) {
            setErrMessage(`確認用パスワードが未入力です。`);
            return;
        }

        // 確認用モーダル展開
        openModal();
    }

    /**
     * キャンセルボタン押下
     */
    function clickCancel() {
        navigate(ROUTER_PATH.HOME);
    }

    /**
     * 更新処理実行
     */
    function executeUpdate() {

        const currentPassword = currentPasswordRef.current?.refValue as string;
        const newPassword = newPasswordRef.current?.refValue as string;
        const confirmPassword = confirmPasswordRef.current?.refValue as string;

        const body: UpdateUserPasswordRequestType = {
            currentPassword,
            newPassword,
            confirmPassword,

        };

        // 更新リクエスト呼び出し
        postMutation.mutate(body);
    }

    return {
        currentPasswordRef,
        newPasswordRef,
        confirmPasswordRef,
        clickUpdateUserInfoBtn,
        errMessage,
        clickCancel,
        isOpenModal,
        closeModal,
        executeUpdate,
    }
}