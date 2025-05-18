import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export function useHeaderMenuUl() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();
    // ログインフラグ
    const isLogin = useSelector((state: RootState) => state.isLoginReducer);

    /**
     * URL切り替え時のイベント
     */
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        setNowPath(`/${pathArray[1]}`);
    }, [location]);

    return {
        nowPath,
        isLogin
    }
}