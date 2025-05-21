import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { useHomeSearchArea } from "../Hook/useHomeSearchArea";
import { IoSearch } from "react-icons/io5";
import { IconComponent } from "../../Common/Component/IconComponent";

const Parent = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 22%;
`;

const TextBoxAreaDiv = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 6%;
  height: 37px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



/**
 * 検索条件エリア
 */
export function HomeSearchArea() {

    console.log("HomeSearchArea render");

    const {
        keyword,
        setKeyword,
        clickSearchBtn,
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal, } = useHomeSearchArea();

    return (
        <Parent>
            <TextBoxAreaDiv>
                <BaseTextbox
                    textWidth="100%"
                    placeholder="キーワード"
                    value={keyword}
                    onChange={setKeyword}
                    style={{
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        height: "34px",
                    }}
                />
                <SearchIconAreaDiv>
                    <IconComponent
                        icon={IoSearch}
                        onclick={clickSearchBtn}
                        size="80%"
                    />
                </SearchIconAreaDiv>
            </TextBoxAreaDiv>
        </Parent>
    );
}