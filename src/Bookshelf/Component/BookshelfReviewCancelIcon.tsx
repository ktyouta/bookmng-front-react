import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import React from "react";
import { MdEdit } from "react-icons/md";
import { useBookshelfReviewEditIcon } from "../Hook/useBookshelfReviewEditIcon";
import { useBookshelfReviewCancelIcon } from "../Hook/useBookshelfReviewCancelIcon";
import { RxCross1 } from "react-icons/rx";


const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 20px;
    top: 33px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -17px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

const Parent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 1%;
    box-sizing: border-box;
`;

type propsType = {
  changeEdit: () => void,
}


export function BookshelfReviewCancelIcon(props: propsType) {

  const {
    isOpenEditNav,
    openEditNav,
    closeEditNav,
  } = useBookshelfReviewCancelIcon();

  return (
    <Parent>
      <IconComponent
        icon={RxCross1}
        onclick={props.changeEdit}
        size="95%"
        style={{ color: "#2C3E50" }}
        onMouseEnter={openEditNav}
        onMouseLeave={closeEditNav}
      />
      <BlockNavDiv
        isDisplay={isOpenEditNav}
      >
        キャンセル
      </BlockNavDiv>
    </Parent>
  );
}