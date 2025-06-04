import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export function useHeader() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();
    //ルーティング用
    const navigate = useNavigate();
    // ログインユーザー情報
    const loginUserInfo = useSelector((state: RootState) => state.loginUserInfoSlice);


    /**
     * URL切り替え時のイベント
     */
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        const mainPath = pathArray[1] ? pathArray[1] : ROUTER_PATH.HOME;
        setNowPath(mainPath);
    }, [location]);

    /**
     * ログインボタン押下イベント
     */
    function clickLogin() {
        navigate(ROUTER_PATH.LOGIN);
    }

    return {
        nowPath,
        clickLogin,
        loginUserInfo,
    }
}