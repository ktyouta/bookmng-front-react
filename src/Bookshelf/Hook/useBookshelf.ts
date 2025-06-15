import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useEffect, useState } from "react";
import { useBookshelfListApiUrl } from "./useBookshelfListApiUrl";


export function useBookshelf() {

    // お気に入り書籍ID
    const [bookshelfBookId, setBookshelfBookId] = useState(``);
    // お気に入り書籍一覧取得用フック
    const { resetCondition, } = useBookshelfListApiUrl();

    // URL直打ち対応
    useEffect(() => {

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