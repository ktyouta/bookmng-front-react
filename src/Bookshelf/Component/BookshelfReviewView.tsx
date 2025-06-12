import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #CAD4DB;
  border-radius: 15px;
  border: solid 1px;
  padding:2%;
  border-color: #A5B1BA;
  color:#2C3E50;
`;

const ContentDiv = styled.div`
`;

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 1%;
  display: flex;
  text-align: center;
  align-items: center;
`;

const DescriptionDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 1%;
`;


type propsType = {
  review: string,
}

export function BookshelfReviewView(props: propsType) {

  console.log("BookshelfReviewView render");

  return (
    <DescriptionDiv>
      {props.review}
    </DescriptionDiv>
  );
}