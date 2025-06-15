import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json"
import { useEffect, useState } from "react";
import type { BookshelfBookListResponseType } from "../Type/BookshelfBookListResponseType";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { bookshelfBookApiUrlAtom, bookshelfBookListAtom } from "../Atom/BookshelfAtom";
import { useBookshelfListApiUrl } from "./useBookshelfListApiUrl";


export function useBookshelfBookArea() {

    // 書籍リスト
    const [bookListItem, setBookListItemAtom] = useAtom(bookshelfBookListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り書籍リスト取得URL
    const bookshelfBookUrl = useAtomValue(bookshelfBookApiUrlAtom);
    // 書籍一覧API呼び出し済みフラグ
    const [isCalledListApi, setIsCalledListApi] = useState(false);
    // お気に入り書籍一覧取得用フック
    const { changeUrl, } = useBookshelfListApiUrl();

    // URL直打ち対応
    useEffect(() => {

        changeUrl({});
    }, []);

    // 書籍一覧を取得
    const { isLoading, isFetching } = useQueryWrapper<BookshelfBookListResponseType>(
        {
            url: bookshelfBookUrl,
            afSuccessFn: (response: BookshelfBookListResponseType) => {
                setIsCalledListApi(true);
                setBookListItemAtom(response.data);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setIsCalledListApi(true);
                setErrMessage(`書籍情報の取得に失敗しました`);
            }
        }
    );

    return {
        bookListItem,
        isLoading,
        errMessage,
        isFetching,
        isCalledListApi,
    }
}