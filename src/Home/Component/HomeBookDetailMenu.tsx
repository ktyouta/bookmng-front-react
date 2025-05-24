import React from "react";
import styled from "styled-components";
import { HomeMetaInfo } from "./HomeMetaInfo";
import ComboComponent from "../../Common/Component/ComboComponent";
import { BOOK_DETIAL_MENU_LIST, MENU_NO } from "../Const/HomeConst";
import type { BookDetailType } from "../Type/BookDetailType";
import type { GoogleBooksDetailResponseType } from "../Type/GoogleBooksDetailResponseType";


const MenuParentDiv = styled.div`
  width: 78%;
  margin-left: 2%;
  box-sizing:border-box;
  padding-left: 3%;
`;


type propsType = {
  bookDetail: BookDetailType | undefined,
}


export function HomeBookDetailMenu(props: propsType) {

  console.log("HomeBookDetailMenu render");

  const bookDetail = props.bookDetail;

  return (
    <React.Fragment>
      <MenuParentDiv>
        <HomeMetaInfo
          bookDetail={bookDetail}
        />
      </MenuParentDiv>
    </React.Fragment>
  );
}