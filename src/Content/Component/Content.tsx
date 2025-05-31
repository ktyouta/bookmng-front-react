import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useContent } from "../Hook/useContent";
import { NotFound } from "../../NotFound/Component/NotFound";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { Provider } from "jotai";
import { Home } from "../../Home/Component/Home";
import { Bookshelf } from "../../Bookshelf/Component/Bookshelf";

const Parent = styled.div`
  flex: 1;
  padding-top: 100px;
  box-sizing:border-box;
  margin-top:3%;
  background-color:#DDE3E8;
  color:black;
`;

export function Content() {

  console.log("Content render");

  const {
    isLogin,
    isCheckedAuth, } = useContent();

  return (
    <Parent>
      <Routes>
        <Route
          path={`${ROUTER_PATH.HOME}/*`}
          element={
            <Provider>
              <Home />
            </Provider>
          }
        />
        {
          isLogin &&
          <Route
            path={`${ROUTER_PATH.BOOKSHELF}/*`}
            element={
              <Provider>
                <Bookshelf />
              </Provider>
            }
          />
        }
        {
          isCheckedAuth &&
          <Route
            key={"*"}
            path="*"
            element={<NotFound backUrl={`${ROUTER_PATH.HOME}`} />}
          />
        }
      </Routes>
    </Parent>
  );
}