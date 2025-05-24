import React from "react";
import styled from "styled-components";
import { useHomeBookArea } from "../Hook/useHomeBookArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { HomeBookContent } from "./HomeBookContent";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import type { BookListItemType } from "../Type/BookListItemType";
import type { GoogleBooksAPIsModelItemsType } from "../Type/GoogleBooksAPIsModelItemsType";
import { BOOK_LIST_MAX_RESULT } from "../Const/HomeConst";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

const BookUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(var(--grid-container-columns), minmax(0, 1fr));
  margin-bottom: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left:6%;
  padding-right:2%;
  padding-top: 4%;
  --grid-container-columns: 8;
  grid-column-gap: 3%;
  grid-row-gap: 20px;
`;

const MessageDiv = styled.div`
  color:black;
  position: absolute;
  top: 32%;
  left: 42%;
`;

const NextGetBtnAreaDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  box-sizing: border-box;
  margin-top: 3%;
`;

export function HomeBookArea() {

  console.log("HomeBookArea render");

  const {
    bookListData,
    isLoading,
    clickShowMore,
    errMessage, } = useHomeBookArea();

  if (!bookListData) {
    return (
      <MessageDiv>
        キーワードを入力して書籍を検索
      </MessageDiv>
    );
  }

  if (errMessage) {
    return (
      <MessageDiv>
        {errMessage}
      </MessageDiv>
    );
  }

  // 書籍リスト
  const bookListItems = bookListData.items;
  // 書籍情報取得件数
  const totalItems = bookListData.totalItems;

  if (bookListItems.length === 0) {
    return (
      <MessageDiv>
        検索結果が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      {
        isLoading &&
        <LoadingBase />
      }
      <BookUl>
        {
          bookListItems?.map((e: GoogleBooksAPIsModelItemsType) => {
            return (
              <HomeBookContent
                data={e}
                key={e.id}
              />
            )
          })
        }
      </BookUl>
      {
        totalItems >= BOOK_LIST_MAX_RESULT &&
        <NextGetBtnAreaDiv>
          <ButtonComponent
            styleTypeNumber="GRAD_GRAY"
            title={"もっと見る"}
            onclick={() => {
              clickShowMore();
            }}
            style={{
              "fontSize": "0.9rem",
              "height": "7%",
              "background": "#5A6B7A"
            }}
          />
        </NextGetBtnAreaDiv>
      }
    </Parent>
  );
}