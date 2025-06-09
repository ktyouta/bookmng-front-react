import React from "react";
import styled from "styled-components";
import ComboComponent from "../../Common/Component/ComboComponent";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { BookshelfMetaInfo } from "./BookshelfMetaInfo";


const MenuParentDiv = styled.div`
  width: 78%;
  margin-left: 2%;
  box-sizing:border-box;
  padding-left: 3%;
`;


type propsType = {
  bookDetail: BookshelfBookDetailMergedType | undefined,
}


export function BookshelfBookDetailMenu(props: propsType) {

  console.log("BookshelfBookDetailMenu render");

  const bookDetail = props.bookDetail;

  return (
    <React.Fragment>
      <MenuParentDiv>
        <BookshelfMetaInfo
          bookDetail={bookDetail}
        />
      </MenuParentDiv>
    </React.Fragment>
  );
}