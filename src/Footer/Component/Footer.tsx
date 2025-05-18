import React from "react";
import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  height:100px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export function Footer() {

  console.log("Footer render");

  return (
    <Parent>

    </Parent>
  );
}