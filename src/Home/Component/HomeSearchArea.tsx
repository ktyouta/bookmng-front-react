import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { useHomeSearchArea } from "../Hook/useHomeSearchArea";
import { IoSearch } from "react-icons/io5";
import { IconComponent } from "../../Common/Component/IconComponent";
import { ClearableTextbox } from "../../Common/Component/ClearableTextbox";

const Parent = styled.div`
  width: 100%;
  height: 41px;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 18%;
`;

const TextBoxAreaDiv = styled.div`
  width: 83%;
  height: 99%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 46px;
  height: 99%;
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
        clearInput, } = useHomeSearchArea();

    return (
        <Parent>
            <TextBoxAreaDiv>
                <ClearableTextbox
                    width="90%"
                    height="99%"
                    placeholder="キーワード"
                    value={keyword}
                    onChange={setKeyword}
                    style={{
                        borderBottomLeftRadius: 5,
                        borderTopLeftRadius: 5,
                    }}
                    clear={clearInput}
                />
                <SearchIconAreaDiv>
                    <IconComponent
                        icon={IoSearch}
                        onclick={clickSearchBtn}
                        size="75%"
                        style={{ color: "black" }}
                    />
                </SearchIconAreaDiv>
            </TextBoxAreaDiv>
        </Parent>
    );
}