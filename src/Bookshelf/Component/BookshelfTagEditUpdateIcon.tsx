import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useBookshelfTagEditUpdateIcon } from "../Hook/useBookshelfTagEditUpdateIcon";


const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 20px;
    top: 33px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: 20px;
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


export function BookshelfTagEditUpdateIcon(props: propsType) {

    const {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
        udpateTag,
    } = useBookshelfTagEditUpdateIcon({ ...props });

    return (
        <React.Fragment>
            <IconComponent
                icon={FaCheck}
                onclick={udpateTag}
                size="75%"
                style={{ color: "white" }}
                onMouseEnter={openUpdateNav}
                onMouseLeave={closeUpdateNav}
            />
            <BlockNavDiv
                isDisplay={isOpenUpdateNav}
            >
                更新
            </BlockNavDiv>
        </React.Fragment>

    );
}