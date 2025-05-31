import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export function useContent() {

    // ログインフラグ
    const isLogin = useSelector((state: RootState) => state.isLoginReducer);
    // 認証チェック済みフラグ
    const isCheckedAuth = useSelector((state: RootState) => state.isCheckedAuthReducer);

    return {
        isLogin,
        isCheckedAuth
    }
}