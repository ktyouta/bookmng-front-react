import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SetBookIdContext } from "../Component/Home";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";


export function useHomeBookContent() {

    //ルーティング用
    const navigate = useNavigate();
    // 書籍ID(setter)
    const setBookId = SetBookIdContext.useCtx();

    /**
     * 書籍サムネイル、タイトルのクリックイベント
     */
    function clickBook(id: string) {

        if (!id) {
            toast.error(`書籍情報を取得できませんでした。`);
            return;
        }

        setBookId(id);
        navigate(`${ROUTER_PATH.HOME}/${id}`);
    }

    return {
        clickBook
    }
}