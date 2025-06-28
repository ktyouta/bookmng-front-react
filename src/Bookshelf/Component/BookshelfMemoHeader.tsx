import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  position:relative;
`;

const HeaderTitleSpan = styled.span`
  font-size:19px;
`;


export function BookshelfMemoHeader() {

  console.log("BookshelfMemoHeader render");

  return (
    <HeaderDiv>
      <HeaderTitleSpan>
        メモ
      </HeaderTitleSpan>
    </HeaderDiv>
  );
}