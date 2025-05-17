import React from "react";
import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  height:150px;
`;


export function Footer() {

  console.log("Footer render");

  return (
    <Parent>

    </Parent>
  );
}