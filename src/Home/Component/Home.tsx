import React, { createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useHome } from "../Hook/useHome";
import { createCtx } from "../../Common/Function/createCtx";
import { HomeBookList } from "./HomeBookList";
import { HomeBookDetail } from "./HomeBookDetail";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { NotFound } from "../../NotFound/Component/NotFound";

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
                    path={`${ROUTER_PATH.HOME.DETAIL}/*`}
                    element={
                        <BookIdContext.Provider value={bookId}>
                            <SetBookIdContext.Provider value={setBookId}>
                                <HomeBookDetail />
                            </SetBookIdContext.Provider>
                        </BookIdContext.Provider>
                    }
                />
                {/* Not Found */}
                <Route
                    key={"*"}
                    path="*"
                    element={<NotFound backUrl={`${ROUTER_PATH.HOME.ROOT}`} />}
                />
            </Routes>
        </React.Fragment>
    );
}