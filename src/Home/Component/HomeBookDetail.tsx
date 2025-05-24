import React from "react";
import { useHomeBookDetail } from "../Hook/useHomeBookDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { HomeBookDetailInfo } from "./HomeBookDetailInfo";
import { HomeBookDetailMenu } from "./HomeBookDetailMenu";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
`;

const BookContentDiv = styled.div`
  width: 100%;
  display:flex;
  box-sizing:border-box;
  padding-left:9%;
  padding-right:5%;
`;

const MessageDiv = styled.div`
  position: absolute;
  top: 28%;
  left: 42%;
`;

const BackHomeP = styled.p`
  color:blue;
  cursor: pointer;
`;


export function HomeBookDetail() {

  console.log("HomeBookDetail render");

  const {
    isLoading,
    bookDetail,
    errMessage,
    backHome, } = useHomeBookDetail();

  // ローディング
  if (isLoading) {
    return <LoadingBase />;
  }

  if (errMessage) {
    return (
      <MessageDiv>
        <p>
          {errMessage}
        </p>
        <BackHomeP
          onClick={backHome}
        >
          一覧に戻る
        </BackHomeP>
      </MessageDiv>
    );
  }

  return (
    <Parent>
      <BookContentDiv>
        {/* 書籍情報 */}
        <HomeBookDetailInfo
          bookDetail={bookDetail}
        />
        {/* メニュー */}
        <HomeBookDetailMenu
          bookDetail={bookDetail}
        />
      </BookContentDiv>
    </Parent>
  );
}