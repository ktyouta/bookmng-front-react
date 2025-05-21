import React from "react";
import styled from "styled-components";
import { HomeMetaInfo } from "./HomeMetaInfo";
import ComboComponent from "../../Common/Component/ComboComponent";
import { BOOK_DETIAL_MENU_LIST, MENU_NO } from "../Const/HomeConst";
import { useHomeBookDetailMenu } from "../Hook/useHomeBookDetailMenu";
import type { BookDetailItemType } from "../Type/BookDetailItemType";


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
  color: black;
  font-size: 18px;
`;

type propsType = {
  bookDetail: BookDetailItemType | undefined,
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
        <ComboAreaDiv>
          <ComboTitleSpan>
            メニュー：
          </ComboTitleSpan>
          <ComboComponent
            combo={BOOK_DETIAL_MENU_LIST}
            initValue={BOOK_DETIAL_MENU_LIST[0].value}
            onChange={setOpenMenuNo}
            width="50%"
            minWidth="8%"
            height="39px"
            selectStyle={{
              "backgroundColor": "rgb(24, 26, 30)",
              "color": "white",
            }}
          />
        </ComboAreaDiv>
        {
          // 書籍情報
          openMenuNo === MENU_NO.INFO &&
          <HomeMetaInfo
            bookId={bookId}
            bookDetail={bookDetail}
          />
        }
      </MenuParentDiv>
    </React.Fragment>
  );
}