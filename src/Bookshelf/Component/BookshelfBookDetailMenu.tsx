import React from "react";
import styled from "styled-components";
import ComboComponent from "../../Common/Component/ComboComponent";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { BookshelfMetaInfo } from "./BookshelfMetaInfo";
import { BOOKSHELF_DETAIL_MENU_LIST, MENU_NO } from "../Const/BookshelfConst";
import { useBookshelfBookDetailMenu } from "../Hook/useBookshelfBookDetailMenu";
import { BookshelfReview } from "./BookshelfReview";
import { BookshelfSummary } from "./BookshelfSummary";
import { BookshelfStatus } from "./BookshelfStatus";
import { BookshelfMemo } from "./BookshelfMemo";
import { BookshelfTag } from "./BookshelfTag";


const MenuParentDiv = styled.div`
  width: 78%;
  margin-left: 2%;
  box-sizing:border-box;
  padding-left: 3%;
`;

const ComboAreaDiv = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 3%;
`;

const ComboTitleSpan = styled.span`
  margin-right:2%;
  color: white;
  font-size: 18px;
`;

type propsType = {
  bookDetail: BookshelfBookDetailMergedType,
}


export function BookshelfBookDetailMenu(props: propsType) {

  console.log("BookshelfBookDetailMenu render");

  const {
    selectedMenuNo,
    setSelectedMenuNo,
  } = useBookshelfBookDetailMenu();

  const bookDetail = props.bookDetail;

  return (
    <React.Fragment>
      <MenuParentDiv>
        <ComboAreaDiv>
          <ComboTitleSpan>
            メニュー：
          </ComboTitleSpan>
          <ComboComponent
            combo={BOOKSHELF_DETAIL_MENU_LIST}
            initValue={selectedMenuNo}
            onChange={setSelectedMenuNo}
            width="50%"
            minWidth="8%"
            height="39px"
            selectStyle={{
              backgroundColor: "rgb(24, 26, 30)",
              color: "white",
            }}
          />
        </ComboAreaDiv>
        {
          // 書籍情報
          selectedMenuNo == MENU_NO.INFO &&
          <BookshelfMetaInfo
            bookDetail={bookDetail}
          />
        }
        {
          // 要約
          selectedMenuNo == MENU_NO.SUMMARY &&
          <BookshelfSummary
            bookDetail={bookDetail}
          />
        }
        {
          // 感想
          selectedMenuNo == MENU_NO.REVIEW &&
          <BookshelfReview
            bookDetail={bookDetail}
          />
        }
        {
          // ステータス
          selectedMenuNo == MENU_NO.STATUS &&
          <BookshelfStatus
            bookDetail={bookDetail}
          />
        }
        {
          // メモ
          selectedMenuNo == MENU_NO.MEMO &&
          <BookshelfMemo />
        }
        {
          // タグ
          selectedMenuNo == MENU_NO.TAG &&
          <BookshelfTag />
        }
      </MenuParentDiv>
    </React.Fragment>
  );
}