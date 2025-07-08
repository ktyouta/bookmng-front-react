import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import { useBookshelfTagViewHeader } from "../Hook/useBookshelfTagViewHeader";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:10%;
  padding-right: 2%;
`;

const BlockIconDiv = styled.div`
  width: 3%;
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
`;

const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 20px;
    top: 33px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -17px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

type propsType = {
  changeEdit: () => void,
}

export function BookshelfTagViewHeader(props: propsType) {

  console.log("BookshelfTagViewHeader render");

  const {
    isOpenEditNav,
    openEditNav,
    closeEditNav,
  } = useBookshelfTagViewHeader();

  return (
    <HeaderDiv>
      <FlexSpaceDiv />
      <BlockIconDiv>
        <IconComponent
          icon={MdEdit}
          onclick={props.changeEdit}
          size="75%"
          style={{ color: "white" }}
          onMouseEnter={openEditNav}
          onMouseLeave={closeEditNav}
        />
        <BlockNavDiv
          isDisplay={isOpenEditNav}
        >
          編集
        </BlockNavDiv>
      </BlockIconDiv>
    </HeaderDiv>
  );
}