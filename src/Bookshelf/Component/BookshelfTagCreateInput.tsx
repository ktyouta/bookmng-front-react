import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useBookshelfMemoCreateInput } from "../Hook/useBookshelfMemoCreateInput";
import { FaPlusSquare } from 'react-icons/fa';
import TagsComponent from "../../Common/Component/TagsComponent";
import { useBookshelfTagCreateInput } from "../Hook/useBookshelfTagCreateInput";

const TagInputAreaDiv = styled.div`
    position: sticky;
    left: 0px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 3%;
    display: flex;
    padding-top: 22px;
    padding-right: 7%;
    align-items: center;
`;

const AddIconAreaDiv = styled.div`
  width: 4%;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1%;
  color: white;
`;


export function BookshelfTagCreateInput() {

    console.log("BookshelfTagCreateInput render");

    const {
        suggestTagList,
        addTagList,
        addTag,
        deleteTag,
        addTagEditList,
    } = useBookshelfTagCreateInput();

    return (
        <TagInputAreaDiv>
            {/* タグ入力欄 */}
            <TagsComponent
                tagList={addTagList}
                suggestions={suggestTagList}
                addTag={addTag}
                deleteTag={deleteTag}
            />
            {/* 編集リスト追加ボタン */}
            <AddIconAreaDiv>
                <IconComponent
                    icon={FaPlusSquare}
                    onclick={addTagEditList}
                    size="90%"
                />
            </AddIconAreaDiv>
        </TagInputAreaDiv>
    );
}