import React from "react";
import styled from "styled-components";
import { HomeMetaInfo } from "./HomeMetaInfo";
import ComboComponent from "../../Common/Component/ComboComponent";
import { BOOK_DETIAL_MENU_LIST, MENU_NO } from "../Const/HomeConst";
import { useHomeBookDetailMenu } from "../Hook/useHomeBookDetailMenu";
import type { BookDetailType } from "../Type/BookDetailType";
import type { GoogleBooksDetailResponseType } from "../Type/GoogleBooksDetailResponseType";


const MenuParentDiv = styled.div`
  width: 75%;
  margin-left: 2%;
  box-sizing:border-box;
  padding-top: 1%;
  padding-left: 3%;
`;


const ComboAreaDiv = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 3%;
`;

const ComboTitleSpan = styled.span`
  margin-right:2%;
  color: #2C3E50;
  font-size: 18px;
`;

type propsType = {
  bookDetail: BookDetailType | undefined,
}


export function HomeBookDetailMenu(props: propsType) {

  console.log("HomeBookDetailMenu render");

  const {
    openMenuNo,
    setOpenMenuNo,
    bookId,
  } = useHomeBookDetailMenu();

  const bookDetail = props.bookDetail;

  return (
    <React.Fragment>
      <MenuParentDiv>
        <HomeMetaInfo
          bookId={bookId}
          bookDetail={bookDetail}
        />
      </MenuParentDiv>
    </React.Fragment>
  );
}