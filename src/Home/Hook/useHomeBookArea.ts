import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import type { BookListResponseType } from "../Type/BookListResponseType";
import { keywordAtom, selectedBookCategoryAtom, selectedBookTypeAtom, showMoreDataAtom, bookListDataAtom } from "../Atom/HomeAtom";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { isEqual } from "lodash";
import type { ShowMoreDataType } from "../Type/ShowMoreDataType";
import { useState } from "react";
import { SetBookApiUrlContext, BookApiUrlContext } from "../Component/Home";
import { toast } from "react-toastify";
import type { GoogleBooksAPIsModelType } from "../Type/GoogleBooksAPIsModelType";
import type { GoogleBooksAPIsModelItemsType } from "../Type/GoogleBooksAPIsModelItemsType";
import { BookListApiUrlModel } from "../Model/VideoListApiUrlModel";


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
    // 書籍一覧検索条件選択値(種別)
    const selectedBookType = useAtomValue(selectedBookTypeAtom);
    // 書籍一覧検索条件選択値(カテゴリ)
    const selectedBookCategory = useAtomValue(selectedBookCategoryAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);


    // 書籍一覧を取得
    const { isLoading } = useQueryWrapper<BookListResponseType>(
        {
            url: bookApiUrl,
            afSuccessFn: (response: BookListResponseType) => {

                // 書籍リスト追加読み込み情報変更チェック
                const latestShowMoreData: ShowMoreDataType = {
                    keyword: keyword,
                    bookType: selectedBookType,
                    bookCategory: selectedBookCategory,
                }
                const isEqualShowMoreData = isEqual(showMoreData, latestShowMoreData);

                setBookListData((e) => {

                    const bookListData: GoogleBooksAPIsModelType = response.data;
                    // 現在画面表示されている書籍リスト
                    const nowBookItems = e?.items ?? [];
                    // 新たに取得した書籍リスト
                    const newBookItems: GoogleBooksAPIsModelItemsType[] = bookListData.items;
                    // 次に画面に表示する書籍リスト
                    const latestBookItems = isEqualShowMoreData ? [...nowBookItems, ...newBookItems] : newBookItems;

                    const latestResponse: GoogleBooksAPIsModelType = {
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
    function clickShowMore(nextPageToken: string) {

        const keyword = showMoreData?.keyword;
        const bookType = showMoreData?.bookType ?? ``;
        const bookCategory = showMoreData?.bookCategory ?? ``;

        if (!keyword) {
            toast.error(`書籍を取得できません`);
            return;
        }

        const bookListApiUrlModel = BookListApiUrlModel.create({
            keyword,
            bookType,
            nextPageToken,
            bookCategory
        });

        const bookApiUrl = bookListApiUrlModel.url;
        setBookApiUrl(`${bookApiUrl}`);
    }

    return {
        bookListData,
        isLoading,
        clickShowMore,
        errMessage,
    }
}