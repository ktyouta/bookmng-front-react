import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { bookDetailItemAtom, keywordAtom, startIndexAtom } from "../Atom/HomeAtom";
import { useNavigate } from "react-router-dom";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { BookIdContext, SetBookIdContext } from "../Component/Home";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import type { BookDetailResponseType } from "../Type/BookDetailResponseType";
import { BookDetailApiUrlModel } from "../Model/VideoDetailApiUrlModel";
import type { GoogleBooksDetailResponseType } from "../Type/GoogleBooksDetailResponseType";
import type { BookDetailType } from "../Type/BookDetailType";
import { BookListApiUrlModel } from "../Model/VideoListApiUrlModel";

export function useHomeBookDetail() {

    // 本棚書籍ID
    const bookId = BookIdContext.useCtx();
    // 本棚書籍ID(setter)
    const setBookId = SetBookIdContext.useCtx();
    // 書籍詳細
    const [bookDetail, setBookDetail] = useAtom(bookDetailItemAtom);
    //ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 検索キーワード
    const keyword = useAtomValue(keywordAtom);


    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        // 書籍詳細
        if (pathArray.length == 4 && `/${pathArray[2]}` === `${ROUTER_PATH.HOME.DETAIL}`) {

            // ID部分を取得
            const bookId = pathArray[3];
            setBookId(bookId);
        }
    }, []);

    // 書籍詳細を取得
    const { isLoading } = useQueryWrapper<BookDetailResponseType>(
        {
            url: bookId ? `${new BookDetailApiUrlModel(bookId).bookMngApiPath}` : ``,
            afSuccessFn: (response: BookDetailResponseType) => {

                const data: BookDetailType = response.data;

                if (!data) {
                    setErrMessage(`書籍情報を取得できませんでした。`);
                    return;
                }

                setBookDetail(data);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`書籍情報の取得に失敗しました。`);
            }
        }
    );

    /**
     * ホーム画面(書籍一覧)に戻る
     */
    function backHome() {
        navigate(ROUTER_PATH.HOME.ROOT);
    }

    /**
     * 検索状態を維持してホーム画面(書籍一覧)に戻る
     */
    function backPage() {

        let query = ``;

        if (keyword) {
            const bookListApiUrlModel = BookListApiUrlModel.create({
                keyword,
                startIndex: 0
            });

            query = bookListApiUrlModel.query;
        }

        navigate(`${ROUTER_PATH.HOME.ROOT}${query}`);
    }

    return {
        isLoading,
        bookDetail,
        bookId,
        errMessage,
        backHome,
        backPage,
    };
}