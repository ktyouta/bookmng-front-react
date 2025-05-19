import { IsLoginContext } from "../../QueryApp";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export function useContent() {

    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 認証チェック済みフラグ
    const isCheckedAuth = useSelector((state: RootState) => state.isCheckedAuthReducer);

    return {
        isLogin,
        isCheckedAuth
    }
}