import React from "react";
import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  height:100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#DDE3E8;
`;


export function Footer() {

  console.log("Footer render");

  return (
    <Parent>

    </Parent>
  );
}