import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { BookshelfTagCreateInput } from "./BookshelfTagCreateInput";
import { BookshelfTagEditList } from "./BookshelfTagEditList";
import { BookshelfTagEditFooter } from "./BookshelfTagEditFooter";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
`;


type propsType = {
  changeView: () => void,
}

export function BookshelfTagEdit(props: propsType) {

  console.log("BookshelfTagEdit render");

  return (
    <Parent>
      {/* 入力欄 */}
      <BookshelfTagCreateInput />
      {/* タグリスト */}
      <BookshelfTagEditList />
      {/* タグフッター */}
      <BookshelfTagEditFooter
        changeView={props.changeView}
      />
    </Parent>
  );
}