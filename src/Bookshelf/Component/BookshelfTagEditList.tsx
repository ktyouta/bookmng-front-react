import styled from "styled-components";
import React from "react";
import TagButtonComponent from "../../Common/Component/TagButtonComponent";
import type { tagType } from "../../Common/Component/TagsComponent";
import { useBookshelfTagEditList } from "../Hook/useBookshelfTagEditList";


const Parent = styled.div`
  width: 100%;
  height: 81%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 2%;
  padding-right: 2%;
  color:white;
`;

const TagListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
`;


export function BookshelfTagEditList() {

    console.log("BookshelfTagEditList render");

    const {
        favoriteVideoTagEditList,
        deleteTag } = useBookshelfTagEditList();

    return (
        <Parent>
            {
                favoriteVideoTagEditList && favoriteVideoTagEditList.length > 0 ?
                    <TagListAreaDiv>
                        {
                            favoriteVideoTagEditList.map((e: tagType, index: number) => {

                                const tagKey = e.label;

                                return (
                                    <TagButtonComponent
                                        title={e.label}
                                        btnStyle={{
                                            marginRight: "15px",
                                            marginBottom: "10px"
                                        }}
                                        isDispCross={true}
                                        onclick={() => {
                                            deleteTag(index);
                                        }}
                                        key={tagKey}
                                    />
                                )
                            })
                        }
                    </TagListAreaDiv>
                    :
                    `タグが設定されていません。`
            }
        </Parent>
    );
}