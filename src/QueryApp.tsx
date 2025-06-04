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


// ログインユーザー情報
export const LoginUserInfoContext = createCtx<LoginUserInfoType>();
// ログインユーザー情報(setter)
export const SetLoginUserInfoContext = createCtx<React.Dispatch<React.SetStateAction<LoginUserInfoType>>>();


function QueryApp() {

  console.log(`QueryApp render`);

  const {
    isLogin,
    loginUserInfo,
    setLoginUserInfo, } = useQueryApp();

  return (
    <React.Fragment>
      {/* トースト */}
      <ToastContainer
        position="top-center"
        autoClose={TOAST_DISPLAY_TIME}
      />
      <Routes>
        <Route path="/" element={<Navigate to={`${ROUTER_PATH.HOME}`} />} />
        {/* ログイン */}
        <Route
          path={ROUTER_PATH.LOGIN}
          element={isLogin ?
            <Navigate to={ROUTER_PATH.HOME} />
            :
            <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
              <Login />
            </SetLoginUserInfoContext.Provider>
          }
        />
        {/* アカウント作成 */}
        <Route
          path={ROUTER_PATH.SIGNUP}
          element={
            isLogin ?
              <Navigate to={ROUTER_PATH.HOME} />
              :
              <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                <Siginup />
              </SetLoginUserInfoContext.Provider>
          }
        />
        {/* コンテンツ */}
        <Route
          path="/*"
          element={
            <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
              <LoginUserInfoContext.Provider value={loginUserInfo}>
                <Main />
              </LoginUserInfoContext.Provider>
            </SetLoginUserInfoContext.Provider>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default QueryApp;