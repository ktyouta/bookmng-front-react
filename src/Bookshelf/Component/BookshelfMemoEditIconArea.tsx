import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useBookshelfMemoEditIconArea } from "../Hook/useBookshelfMemoEditIconArea";


const EditNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 25px;
    top: 39px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: 2px;
    box-sizing: border-box;
    color: black;
    justify-content: center;
    align-items: center;
`;

type propsType = {
    openEdit: () => void
}

export function BookshelfMemoEditIconArea(props: propsType) {

    console.log("BookshelfMemoEditIcon render");

    const {
        isOpenEditNav,
        openEditNav,
        closeEditNav, } = useBookshelfMemoEditIconArea();

    return (
        <React.Fragment>
            <IconComponent
                icon={MdEdit}
                onclick={props.openEdit}
                size="45%"
                style={{ color: "white" }}
                onMouseEnter={openEditNav}
                onMouseLeave={closeEditNav}
            />
            <EditNavDiv
                isDisplay={isOpenEditNav}
            >
                編集
            </EditNavDiv>
        </React.Fragment>
    );
}