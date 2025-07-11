import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { BookshelfTagCreateInput } from "./BookshelfTagCreateInput";
import { BookshelfTagEditList } from "./BookshelfTagEditList";
import { BookshelfTagEditFooter } from "./BookshelfTagEditFooter";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";


type propsType = {
  changeView: () => void,
}

export function BookshelfTagEdit(props: propsType) {

  console.log("BookshelfTagEdit render");

  return (
    <React.Fragment>
      {/* 入力欄 */}
      <BookshelfTagCreateInput />
      {/* タグリスト */}
      <BookshelfTagEditList />
      <FlexSpaceDiv />
      {/* タグフッター */}
      <BookshelfTagEditFooter
        changeView={props.changeView}
      />
    </React.Fragment>
  );
}