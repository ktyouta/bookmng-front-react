import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useContent } from "../Hook/useContent";
import { NotFound } from "../../NotFound/Component/NotFound";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 1%;
`;

export function Content() {

    console.log("Content render");

    useContent();

    return (
        <Parent>

        </Parent>
    );
}