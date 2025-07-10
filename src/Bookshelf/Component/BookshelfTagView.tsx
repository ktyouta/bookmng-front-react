import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { BookshelfTagList } from "./BookshelfTagList";
import { BookshelfTagViewHeader } from "./BookshelfTagViewHeader";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
`;


type propsType = {
  changeEdit: () => void,
}

export function BookshelfTagView(props: propsType) {

  console.log("BookshelfTagView render");

  return (
    <Parent>
      {/* 入力欄 */}
      <BookshelfTagViewHeader
        changeEdit={props.changeEdit}
      />
      {/* タグリスト */}
      <BookshelfTagList />
    </Parent>
  );
}