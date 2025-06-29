import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useBookshelfMemoCacelIconArea } from "../Hook/useBookshelfMemoCacelIconArea";


const CancelNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 50px;
    height: 25px;
    top: 39px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -5px;
    box-sizing: border-box;
    color: black;
    justify-content: center;
    align-items: center;
`;


type propsType = {
    closeEdit: () => void
}

export function BookshelfMemoCancelIconArea(props: propsType) {

    console.log("BookshelfMemoCancelIconArea render");

    const {
        isOpenCancelNav,
        openCancelNav,
        closeCancelNav, } = useBookshelfMemoCacelIconArea();

    return (
        <React.Fragment>
            <IconComponent
                icon={RxCross1}
                onclick={props.closeEdit}
                size="50%"
                style={{ color: "#2C3E50" }}
                onMouseEnter={openCancelNav}
                onMouseLeave={closeCancelNav}
            />
            <CancelNavDiv
                isDisplay={isOpenCancelNav}
            >
                キャンセル
            </CancelNavDiv>
        </React.Fragment>
    );
}