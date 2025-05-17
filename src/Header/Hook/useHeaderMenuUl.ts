import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IsLoginContext } from "../../QueryApp";

export function useHeaderMenuUl() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();

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