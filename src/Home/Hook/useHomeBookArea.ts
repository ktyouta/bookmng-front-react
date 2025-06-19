import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import type { BookListResponseType } from "../Type/BookListResponseType";
import { keywordAtom, selectedBookCategoryAtom, selectedBookTypeAtom, showMoreDataAtom, bookListDataAtom, startIndexAtom } from "../Atom/HomeAtom";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { isEqual } from "lodash";
import type { ShowMoreDataType } from "../Type/ShowMoreDataType";
import { useEffect, useState } from "react";
import { SetBookApiUrlContext, BookApiUrlContext } from "../Component/Home";
import { toast } from "react-toastify";
import type { GoogleBooksAPIsModelType } from "../Type/GoogleBooksAPIsModelType";
import type { GoogleBooksAPIsModelItemsType } from "../Type/GoogleBooksAPIsModelItemsType";
import { BookListApiUrlModel } from "../Model/BookListApiUrlModel";
import { BOOK_LIST_MAX_RESULT } from "../Const/HomeConst";
import { useNavigate } from "react-router-dom";
import type { BookListDataType } from "../Type/BookListDataType";
import type { BookListItemType } from "../Type/BookListItemType";


export function useHomeBookArea() {

    // 書籍取得用URL
    const bookApiUrl = BookApiUrlContext.useCtx();
    const setBookApiUrl = SetBookApiUrlContext.useCtx();
    // 書籍リスト
    const [bookListData, setBookListData] = useAtom(bookListDataAtom);
    // 書籍リスト追加読み込み用
    const [showMoreData, setShowMoreData] = useAtom(showMoreDataAtom);
    // 検索キーワード
    const keyword = useAtomValue(keywordAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 書籍一覧検索条件選択値(書籍取得開始位置)
    const [startIndex, setStartIndex] = useAtom(startIndexAtom);
    //ルーティング用
    const navigate = useNavigate();
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

                const keyword = keywordValue !== null ? keywordValue : ``;

                // 検索条件の初期値設定
                setKeyword(keyword);

                const bookListApiUrlModel = BookListApiUrlModel.reConstruct(query);
                setBookApiUrl(bookListApiUrlModel.url);
            }
        }
    }, []);

    // 書籍一覧を取得
    const { isLoading } = useQueryWrapper<BookListResponseType>(
        {
            url: bookApiUrl,
            afSuccessFn: (response: BookListResponseType) => {

                // 書籍リスト追加読み込み情報変更チェック
                const latestShowMoreData: ShowMoreDataType = {
                    keyword: keyword,
                }

                const isEqualShowMoreData = isEqual(showMoreData, latestShowMoreData);

                setBookListData((e) => {

                    const bookListData: BookListDataType = response.data;
                    // 現在画面表示されている書籍リスト
                    const nowBookItems = e?.items ?? [];
                    // 新たに取得した書籍リスト
                    const newBookItems: BookListItemType[] = bookListData.items;
                    // 次に画面に表示する書籍リスト
                    const latestBookItems = isEqualShowMoreData ? [...nowBookItems, ...newBookItems] : newBookItems;

                    const latestResponse: BookListDataType = {
                        ...bookListData,
                        items: latestBookItems
                    }

                    return latestResponse;
                });

                setShowMoreData(latestShowMoreData);
                setBookApiUrl(``);
                setErrMessage(``);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`書籍情報の取得に失敗しました`);
                setBookApiUrl(``);
                setShowMoreData(undefined);
            }
        }
    );

    /**
     * もっと見るボタン押下
     */
    function clickShowMore() {

        const keyword = showMoreData?.keyword;

        if (!keyword) {
            toast.error(`書籍を取得できません`);
            return;
        }

        // 取得開始イデックスを加算
        const nextStartIndex = startIndex + BOOK_LIST_MAX_RESULT;

        const bookListApiUrlModel = BookListApiUrlModel.create({
            keyword,
            startIndex: nextStartIndex,
        });

        const bookApiUrl = bookListApiUrlModel.url;
        setBookApiUrl(`${bookApiUrl}`);
        setStartIndex(nextStartIndex);
    }

    return {
        bookListData,
        isLoading,
        clickShowMore,
        errMessage,
    }
}