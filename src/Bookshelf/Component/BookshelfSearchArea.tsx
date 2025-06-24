import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ModalComponent from "../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import TagButtonComponent from "../../Common/Component/TagButtonComponent";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import ComboComponent from "../../Common/Component/ComboComponent";
import React from "react";
import { useBookshelfSearchArea } from "../Hook/useBookshelfSearchArea";
import { BookshelfSearchCondition } from "./BookshelfSearchCondition";

const Parent = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const ComboTitleSpan = styled.span`
  margin-right:7px;
  color: white;
  font-size: 16px;
`;


/**
 * 検索条件エリア
 */
export function BookshelfSearchArea() {

  console.log("BookshelfSearchArea render");

  const {
    isOpenFilterModal,
    openFilterModal,
    closeFilterModal,
    selectedBookshelfTag,
    sortList,
    selectSort,
    selectedFavoriteVideoSortKey } = useBookshelfSearchArea();

  return (
    <Parent>
      {
        selectedBookshelfTag &&
        <TagButtonComponent
          title={selectedBookshelfTag}
          btnStyle={{
            marginRight: "15px"
          }}
        />
      }
      <FlexSpaceDiv />
      {
        sortList && sortList.length > 0 &&
        <React.Fragment>
          <ComboTitleSpan>
            並べ替え：
          </ComboTitleSpan>
          <ComboComponent
            combo={sortList}
            initValue={selectedFavoriteVideoSortKey ?? sortList[0].value}
            onChange={selectSort}
            width="23%"
            height="39px"
            selectStyle={{
              "backgroundColor": "rgb(24, 26, 30)",
              "color": "white",
              "marginRight": "3%"
            }}
          />
        </React.Fragment>
      }
      <ButtonComponent
        styleTypeNumber="BASE"
        title={"フィルター"}
        onclick={openFilterModal}
        style={{
          "fontSize": "0.9rem",
          "height": "41px",
          "width": "13%",
          "background": "#4A90E2",
          "color": "white",
          "borderRadius": "5",
        }}
      />
      {
        // フィルターモーダル
        isOpenFilterModal &&
        <ModalComponent
          modalIsOpen={isOpenFilterModal}
          closeModal={closeFilterModal}
          style={{
            backgroundColor: "#2C3E50",
            borderRadius: "1%",
            border: "solid 1px",
            color: "white",
            overflowY: "hidden",
          }}
          width="42%"
          height="65%"
          positionTop="15%"
          positionLeft="29%"
        >
          <BookshelfSearchCondition
            close={closeFilterModal}
          />
        </ModalComponent>
      }
      {
        isOpenFilterModal &&
        <OverlayDiv />
      }
    </Parent>
  );
}