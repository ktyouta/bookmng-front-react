import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { useNavigate } from "react-router-dom";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import type { BookshelfBookDetailResponseType } from "../Type/BookshelfBookDetailResponseType";
import { BookshelfBookIdContext, SetBookshelfBookIdContext } from "../Component/Bookshelf";
import { bookshelfDetailItemAtom } from "../Atom/BookshelfAtom";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { BookshelfBookDetailApiUrlModel } from "../Model/BookshelfBookDetailApiUrlModel";

export function useBookshelfBookDetail() {

    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();
    // 本棚書籍ID(setter)
    const setBookId = SetBookshelfBookIdContext.useCtx();
    // 本棚詳細
    const [bookDetail, setBookDetail] = useAtom(bookshelfDetailItemAtom);
    //ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);


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
    const { isLoading } = useQueryWrapper<BookshelfBookDetailResponseType>(
        {
            url: bookId ? `${new BookshelfBookDetailApiUrlModel(bookId).bookMngApiPath}` : ``,
            afSuccessFn: (response: BookshelfBookDetailResponseType) => {

                const data: BookshelfBookDetailMergedType = response.data;

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
     * 本棚一覧に戻る
     */
    function backPage() {

        navigate(`${ROUTER_PATH.BOOKSHELF.ROOT}`);
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