import React, { createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useHome } from "../Hook/useHome";
import { createCtx } from "../../Common/Function/createCtx";
import { HomeBookList } from "./HomeBookList";
import { HomeBookDetail } from "./HomeBookDetail";

// 書籍ID
export const BookIdContext = createCtx<string>();
// 書籍ID(setter)
export const SetBookIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 書籍取得用URL
export const BookApiUrlContext = createCtx<string>();
// 書籍取得用URL(setter)
export const SetBookApiUrlContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();


export function Home() {

    console.log("Home render");

    const {
        bookId,
        setBookId,
        bookApiUrl,
        setBookApiUrl,
    } = useHome();

    return (
        <React.Fragment>
            <Routes>
                {/* 書籍一覧 */}
                <Route
                    path={`/`}
                    element={
                        <SetBookIdContext.Provider value={setBookId}>
                            <BookApiUrlContext.Provider value={bookApiUrl}>
                                <SetBookApiUrlContext.Provider value={setBookApiUrl}>
                                    <HomeBookList />
                                </SetBookApiUrlContext.Provider>
                            </BookApiUrlContext.Provider>
                        </SetBookIdContext.Provider>
                    }
                />
                {/* 書籍詳細 */}
                <Route
                    path={`${bookId}`}
                    element={
                        <BookIdContext.Provider value={bookId}>
                            <HomeBookDetail />
                        </BookIdContext.Provider>
                    }
                />
            </Routes>
        </React.Fragment>
    );
}