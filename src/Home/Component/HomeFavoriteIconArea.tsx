import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { useHomeBookContentFavoriteIconArea } from "../Hook/useHomeBookContentFavoriteIconArea";
import { FaStar } from "react-icons/fa";


const NavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 100px;
    height: 25px;
    top: 11%;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    right: -3%;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;


export function HomeBookContentFavoriteIconArea() {

    console.log("HomeBookContentFavoriteIconArea render");

    const {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav, } = useHomeBookContentFavoriteIconArea();

    return (
        <React.Fragment>
            <IconComponent
                icon={FaStar}
                onclick={() => { }}
                size="17px"
                style={{
                    color: `yellow`,
                    position: `absolute`,
                    top: `1%`,
                    right: `1%`
                }}
                onMouseEnter={openFavoriteNav}
                onMouseLeave={closeFavoriteNav}
            />
            <NavDiv
                isDisplay={isOpenFavoriteNav}
            >
                本棚登録済み
            </NavDiv>
        </React.Fragment>
    );
}