import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTER_PATH } from './Common/Const/RouterPath';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_DISPLAY_TIME } from './Common/Const/CommonConst';
import useApp from './useApp';
import { createCtx } from './Common/Function/createCtx';
import type { LoginUserInfoType } from './Common/Type/LoginUserInfoType';
import { Login } from './Login/Component/Login';
import { Siginup } from './Siginup/Component/Siginup';
import Main from './Main/Component/Main';
import useQueryApp from './useQueryApp';
import { UpdateUserInfo } from './UpdateUserInfo/Component/UpdateUserInfo';
import { UpdateUserPassword } from './UpdateUserPassword/Component/UpdateUserPassword';
import LoadingBase from './Common/Component/LoadingBase';
import styled from 'styled-components';

const LoadingScreenDiv = styled.div`
  height:100vh;
  background-color:#DDE3E8;
`;


function QueryApp() {

  console.log(`QueryApp render`);

  const {
    isLogin,
    isCheckedAuth, } = useQueryApp();

  return (
    <React.Fragment>
      {/* トースト */}
      <ToastContainer
        position="top-center"
        autoClose={TOAST_DISPLAY_TIME}
      />
      <Routes>
        <Route path="/" element={<Navigate to={`${ROUTER_PATH.HOME.ROOT}`} />} />
        {/* ログイン */}
        <Route
          path={ROUTER_PATH.LOGIN}
          element={isLogin ?
            <Navigate to={ROUTER_PATH.HOME.ROOT} />
            :
            <Login />
          }
        />
        {/* アカウント作成 */}
        <Route
          path={ROUTER_PATH.SIGNUP}
          element={
            isLogin ?
              <Navigate to={ROUTER_PATH.HOME.ROOT} />
              :
              <Siginup />
          }
        />
        {/* ユーザー情報更新 */}
        {
          isLogin &&
          <Route
            path={ROUTER_PATH.UPDATE_USER_INFO}
            element={<UpdateUserInfo />}
          />
        }
        {/* パスワード変更 */}
        {
          isLogin &&
          <Route
            path={ROUTER_PATH.UPDATE_USER_PASSWORD}
            element={<UpdateUserPassword />}
          />
        }
        {/* コンテンツ */}
        <Route
          path="/*"
          element={
            isCheckedAuth ?
              <Main />
              :
              <LoadingScreenDiv>
                <LoadingBase />
              </LoadingScreenDiv>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default QueryApp;