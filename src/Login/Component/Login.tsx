import React from "react";
import styled from "styled-components";
import { useLogin } from "../Hook/useLogin";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";


const Parent = styled.div`
  width: 100vw;
  background-color: #dcdcdc;
  height: 100vh;
`;

const LoginFormDiv = styled.div`
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10%;
`;

const LoginButtonDiv = styled.div`
    text-align: center;
    margin-top: 6%;
`;

const TitleDiv = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 6%;
`;

const ErrMessageDiv = styled.div`
    text-align: center;
    font-size: 15px;
    margin-bottom: 6%;
    color: red;
`;

const SignUpDiv = styled.div`
    text-align: center;
    margin-top: 7%;
`;

const SignUpSpan = styled.span`
    font-size: 15px;
    color: blue;
    cursor:pointer;
`;

const InputRowDiv = styled.div`
`;

const InputTitleDiv = styled.div`
`;

export function Login() {

  console.log("Login render");

  const {
    userNameRef,
    userPasswordRef,
    clickLoginBtn,
    handleKeyPress,
    clickSignup,
    errMessage,
    clickBack } = useLogin();

  return (
    <Parent>
      <LoginFormDiv>
        <TitleDiv>
          ログイン
        </TitleDiv>
        {
          errMessage &&
          <ErrMessageDiv>
            {errMessage}
          </ErrMessageDiv>
        }
        <InputRowDiv>
          <InputTitleDiv>
            ユーザー名
          </InputTitleDiv>
          <BaseTextbox
            value={""}
            length={100}
            disabled={false}
            ref={userNameRef}
            textWidth='100%'
            onKeyDown={handleKeyPress}
            placeholder='UserName'
            autoComplete={true}
            style={{ marginBottom: "7%" }}
          />
        </InputRowDiv>
        <InputRowDiv>
          <InputTitleDiv>
            パスワード
          </InputTitleDiv>
          <BaseTextbox
            type="password"
            value={""}
            length={100}
            disabled={false}
            ref={userPasswordRef}
            textWidth='100%'
            onKeyDown={handleKeyPress}
            placeholder='Password'
          />
        </InputRowDiv>
        <SignUpDiv
          onClick={clickSignup}
        >
          <SignUpSpan>
            アカウント作成はこちらから
          </SignUpSpan>
        </SignUpDiv>
        <LoginButtonDiv>
          <ButtonComponent
            styleTypeNumber="RUN"
            title={"戻る"}
            onclick={clickBack}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
            }}
          />
          <ButtonComponent
            styleTypeNumber="RUN"
            title={"ログイン"}
            onclick={clickLoginBtn}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
              "marginLeft": "5%",
            }}
          />
        </LoginButtonDiv>
      </LoginFormDiv>
    </Parent>
  );
}