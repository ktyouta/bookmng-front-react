import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { keywordAtom, selectedBookCategoryAtom, selectedBookTypeAtom, showMoreDataAtom, bookListDataAtom } from "../Atom/HomeAtom";
import { isEqual } from "lodash";
import useSwitch from "../../Common/Hook/useSwitch";
import { useNavigate } from "react-router-dom";
import { SetBookApiUrlContext } from "../Component/Home";
import { toast } from "react-toastify";
import { BookListApiUrlModel } from "../Model/BookListApiUrlModel";


export function useHomeSearchArea() {

    // 検索キーワード
    const [keyword, setKeyword] = useAtom(keywordAtom);
    // 書籍取得用URL
    const setBookApiUrl = SetBookApiUrlContext.useCtx();
    //ルーティング用
    const navigate = useNavigate();
    // 書籍リスト追加読み込み用
    const setShowMoreData = useSetAtom(showMoreDataAtom);


    /**
     * 検索ボタン押下イベント
     */
    function clickSearchBtn() {

        if (!keyword) {
            toast.warn(`キーワードを入力してください。`);
            return;
        }

        const bookListApiUrlModel = BookListApiUrlModel.create({
            keyword,
        });

        setBookApiUrl(bookListApiUrlModel.url);
        setShowMoreData(undefined);
        navigate(bookListApiUrlModel.query);
    }

    return {
        keyword,
        setKeyword,
        clickSearchBtn,
    }
}