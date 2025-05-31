import { useLocation, useNavigate } from "react-router-dom";
import { SetBookshelfBookIdContext } from "../Component/Bookshelf";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";


export function useBookshelfBookContent() {

    // 書籍ID
    const setBookshelfBookId = SetBookshelfBookIdContext.useCtx();
    //ルーティング用
    const navigate = useNavigate();

    /**
     * 書籍サムネイル、タイトルのクリックイベント
     */
    function clickBook(id: string) {

        if (!id) {
            toast.error(`書籍情報を取得できませんでした。`);
            return;
        }

        setBookshelfBookId(id);
        navigate(`${ROUTER_PATH.FAVORITE}/${id}`);
    }

    return {
        clickBook
    }
}