import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useEffect, useState } from "react";
import { useBookshelfListApiUrl } from "./useBookshelfListApiUrl";


export function useBookshelf() {

    // お気に入り書籍ID
    const [bookshelfBookId, setBookshelfBookId] = useState(``);
    // お気に入り書籍一覧取得用フック
    const {
        changeUrl,
        resetCondition, } = useBookshelfListApiUrl();

    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        const query = window.location.search;

        // 書籍一覧
        if (pathArray.length == 2) {

            changeUrl({});
        }
        // 書籍詳細
        else if (pathArray.length == 3) {

            // ID部分を取得
            const bookId = pathArray[2];
            setBookshelfBookId(bookId);
        }

        // アンマウント時に検索条件をリセット
        return (() => {
            resetCondition();
        })

    }, []);

    return {
        bookshelfBookId,
        setBookshelfBookId,
    }
}