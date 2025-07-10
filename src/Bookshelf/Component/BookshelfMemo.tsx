import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { BookshelfMemoContent } from "./BookshelfMemoContent";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { BookshelfMemoCreateInput } from "./BookshelfMemoCreateInput";
import { BookshelfMemoHeader } from "./BookshelfMemoHeader";
import { BookshelfMemoList } from "./BookshelfMemoList";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 15px;
  border: solid 1px;
`;


export function BookshelfMemo() {

  console.log("BookshelfMemo render");

  return (
    <Parent>
      {/* メモリスト */}
      <BookshelfMemoList />
      {/* 入力欄 */}
      <BookshelfMemoCreateInput />
    </Parent>
  );
}