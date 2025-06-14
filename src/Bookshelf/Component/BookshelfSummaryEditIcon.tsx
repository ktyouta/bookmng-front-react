import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import React from "react";
import { MdEdit } from "react-icons/md";
import { useBookshelfReviewEditIcon } from "../Hook/useBookshelfReviewEditIcon";


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
`;

type propsType = {
  changeEdit: () => void,
}


export function Summary(props: propsType) {

  console.log("Summary render");

  const {
    isOpenEditNav,
    openEditNav,
    closeEditNav,
  } = useBookshelfReviewEditIcon();

  return (
    <Parent>
      <IconComponent
        icon={MdEdit}
        onclick={props.changeEdit}
        size="95%"
        style={{ color: "#2C3E50" }}
        onMouseEnter={openEditNav}
        onMouseLeave={closeEditNav}
      />
      <BlockNavDiv
        isDisplay={isOpenEditNav}
      >
        編集
      </BlockNavDiv>
    </Parent>
  );
}