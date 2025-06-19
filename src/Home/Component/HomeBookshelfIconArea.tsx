import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { FaBook } from "react-icons/fa";
import { useHomeBookshelfIconArea } from "../Hook/useHomeBookshelfIconArea";


const NavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 83px;
    height: 25px;
    top: 1%;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    right: -17%;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;


export function HomeBookshelfIconArea() {

    console.log("HomeBookshelfIconArea render");

    const {
        isOpenBookshelfNav,
        openBookshelfNav,
        closeBookshelfNav, } = useHomeBookshelfIconArea();

    return (
        <React.Fragment>
            <IconComponent
                icon={FaBook}
                onclick={() => { }}
                size="17px"
                style={{
                    color: `#2C3E50`,
                    position: `absolute`,
                    top: `-12%`,
                    right: `-5%`
                }}
                onMouseEnter={openBookshelfNav}
                onMouseLeave={closeBookshelfNav}
            />
            <NavDiv
                isDisplay={isOpenBookshelfNav}
            >
                本棚登録済み
            </NavDiv>
        </React.Fragment>
    );
}