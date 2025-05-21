import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { keywordAtom, selectedBookCategoryAtom, selectedBookTypeAtom } from "../Atom/HomeAtom";
import { BookListApiUrlModel } from "../Model/VideoListApiUrlModel";

export function useHome() {

    // 書籍ID
    const [bookId, setBookId] = useState(``);
    // 書籍取得用URL
    const [bookApiUrl, setBookApiUrl] = useState(``);
    // 書籍一覧検索条件選択値(種別)
    const setSelectedBookType = useSetAtom(selectedBookTypeAtom);
    // 書籍一覧検索条件選択値(カテゴリ)
    const setSelectedBookCategory = useSetAtom(selectedBookCategoryAtom);
    // 検索キーワード
    const setKeyword = useSetAtom(keywordAtom);


    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        const query = window.location.search;

        // 書籍一覧
        if (pathArray.length == 2) {

            // クエリパラメータが設定されている場合
            if (query && query.length > 0 && query.charAt(0) === `?`) {

                const params = new URLSearchParams(query);
                const keywordValue = params.get(`q`);
                const bookCategoryValue = params.get(`bookcategory`);
                const bookTypeValue = params.get(`booktype`);

                const keyword = keywordValue !== null ? keywordValue : ``;
                const bookCategory = bookCategoryValue !== null ? bookCategoryValue : ``;
                const bookType = bookTypeValue !== null ? bookTypeValue : ``;

                // 検索条件の初期値設定
                setKeyword(keyword);
                setSelectedBookType(bookType);
                setSelectedBookCategory(bookCategory);

                const bookListApiUrlModel = BookListApiUrlModel.reConstruct(query);
                setBookApiUrl(bookListApiUrlModel.url);
            }
        }
        // 書籍詳細
        else if (pathArray.length == 3) {

            // ID部分を取得
            const bookId = pathArray[2];
            setBookId(bookId);
        }
    }, []);

    return {
        bookId,
        setBookId,
        bookApiUrl,
        setBookApiUrl,
    }
}