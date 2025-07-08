import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useBookshelfMemoCreateInput } from "../Hook/useBookshelfMemoCreateInput";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { BookshelfTagEditCloseIcon } from "./BookshelfTagEditCloseIcon";
import { BookshelfTagEditUpdateIcon } from "./BookshelfTagEditUpdateIcon";


const MemoInputAreaDiv = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  display:flex;
  align-items: center;
  height:4%;
  padding-right: 2%;
`;

const BlockIconDiv = styled.div`
  width: 6%;
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 20px;
`;

type propsType = {
    changeView: () => void,
}


export function BookshelfTagEditFooter(props: propsType) {

    console.log("BookshelfTagEditFooter render");

    return (
        <MemoInputAreaDiv>
            <FlexSpaceDiv />
            <BlockIconDiv>
                {/* 閉じるアイコン */}
                <BookshelfTagEditCloseIcon
                    changeView={props.changeView}
                />
                {/* 更新アイコン */}
                <BookshelfTagEditUpdateIcon
                    changeView={props.changeView}
                />
            </BlockIconDiv>
        </MemoInputAreaDiv>
    );
}