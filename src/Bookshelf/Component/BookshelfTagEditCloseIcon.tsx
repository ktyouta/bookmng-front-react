import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useBookshelfTagEditCloseIcon } from "../Hook/useBookshelfTagEditCloseIcon";


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


type propsType = {
    changeView: () => void,
}


export function BookshelfTagEditCloseIcon(props: propsType) {

    const {
        isOpenCloseNav,
        openCloseNav,
        closeCloseNav,
    } = useBookshelfTagEditCloseIcon();

    return (
        <React.Fragment>
            <IconComponent
                icon={RxCross1}
                onclick={props.changeView}
                size="75%"
                style={{ color: "white" }}
                onMouseEnter={openCloseNav}
                onMouseLeave={closeCloseNav}
            />
            <BlockNavDiv
                isDisplay={isOpenCloseNav}
            >
                閉じる
            </BlockNavDiv>
        </React.Fragment>

    );
}