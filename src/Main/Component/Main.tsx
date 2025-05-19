import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { UpdateUserInfo } from "../../UpdateUserInfo/Component/UpdateUserInfo";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { UpdateUserPassword } from "../../UpdateUserPassword/Component/UpdateUserPassword";
import { createCtx } from "../../Common/Function/createCtx";
import { useMain } from "../Hook/useMain";
import { Header } from "../../Header/Component/Header";
import { Footer } from "../../Footer/Component/Footer";
import { Content } from "../../Content/Component/Content";

//アプリケーション全体のスタイル
const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Main() {

    console.log("Main render");

    useMain();

    return (
        <Routes>
            <Route
                path={ROUTER_PATH.UPDATE_USER_INFO}
                element={<UpdateUserInfo />}
            />
            <Route
                path={ROUTER_PATH.UPDATE_USER_PASSWORD}
                element={<UpdateUserPassword />}
            />
            <Route
                path={`/*`}
                element={
                    <AppDiv>
                        {/* ヘッダ */}
                        <Header />
                        {/* コンテンツ */}
                        <Content />
                        {/* フッター */}
                        <Footer />
                    </AppDiv>
                }
            />
        </Routes>
    );
}

export default Main;