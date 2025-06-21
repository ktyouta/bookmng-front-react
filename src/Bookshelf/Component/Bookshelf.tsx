import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { useBookshelf } from "../Hook/useBookshelf";
import type { comboType } from "../../Common/Component/ComboComponent";
import { BookshelfBookList } from "./BookshelfBookList";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { BookshelfBookDetail } from "./BookshelfBookDetail";

// 書籍ID
export const BookshelfBookIdContext = createCtx<string>();
// 書籍ID(setter)
export const SetBookshelfBookIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 読書状況リスト
export const ReadStatusListContext = createCtx<comboType[]>();


export function Bookshelf() {

    console.log("Bookshelf render");

    const {
        bookshelfBookId,
        setBookshelfBookId,
        readStatusList, } = useBookshelf();

    return (
        <ReadStatusListContext.Provider value={readStatusList}>
            <Routes>
                {/* 本棚一覧 */}
                <Route
                    path={`/`}
                    element={
                        <SetBookshelfBookIdContext.Provider value={setBookshelfBookId}>
                            <BookshelfBookList />
                        </SetBookshelfBookIdContext.Provider>
                    }
                />
                {/* 本棚詳細 */}
                <Route
                    path={`${ROUTER_PATH.BOOKSHELF.DETAIL}/*`}
                    element={
                        <BookshelfBookIdContext.Provider value={bookshelfBookId}>
                            <SetBookshelfBookIdContext.Provider value={setBookshelfBookId}>
                                <BookshelfBookDetail />
                            </SetBookshelfBookIdContext.Provider>
                        </BookshelfBookIdContext.Provider>
                    }
                />
            </Routes>
        </ReadStatusListContext.Provider>
    );
}