import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { TAG_EDIT_MODE } from "../Const/BookshelfConst";
import { BookshelfTagView } from "./BookshelfTagView";
import { BookshelfTagEdit } from "./BookshelfTagEdit";
import { useBookshelfTag } from "../Hook/useBookshelfTag";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
`;



export function BookshelfTag() {

  console.log("BookshelfTag render");

  const {
    editMode,
    changeEdit,
    changeView, } = useBookshelfTag();

  return (
    <Parent>
      {
        // 閲覧
        editMode === TAG_EDIT_MODE.VIEW &&
        <BookshelfTagView
          changeEdit={changeEdit}
        />
      }
      {
        // 編集
        editMode === TAG_EDIT_MODE.EDIT &&
        <BookshelfTagEdit
          changeView={changeView}
        />
      }

    </Parent>
  );
}