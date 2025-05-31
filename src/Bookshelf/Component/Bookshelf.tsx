import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { useBookshelf } from "../Hook/useBookshelf";
import type { comboType } from "../../Common/Component/ComboComponent";
import { BookshelfBookList } from "./BookshelfBookList";

// お気に入り書籍ID
export const BookshelfBookIdContext = createCtx<string>();
// お気に入り書籍ID(setter)
export const SetBookshelfBookIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 視聴状況リスト
export const ViewStatusListContext = createCtx<comboType[]>();


export function Bookshelf() {

    console.log("Bookshelf render");

    const {
        bookshelfBookId,
        setBookshelfBookId, } = useBookshelf();

    return (
        <Routes>
            {/* お気に入り書籍一覧 */}
            <Route
                path={`/`}
                element={
                    <SetBookshelfBookIdContext.Provider value={setBookshelfBookId}>
                        <BookshelfBookList />
                    </SetBookshelfBookIdContext.Provider>
                }
            >
            </Route>
        </Routes>
    );
}