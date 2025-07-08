import styled from "styled-components";
import React from "react";
import TagButtonComponent from "../../Common/Component/TagButtonComponent";
import { useBookshelfTagList } from "../Hook/useBookshelfTagList";
import type { BookshelfTagType } from "../Type/BookshelfTagType";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 2%;
  color:white;
`;

const TagListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0% 1% 1% 1%;
`;

const TagListAreaTitleDiv = styled.div`
  box-sizing: border-box;
  margin-bottom: 2%;
`;

export function BookshelfTagList() {

    console.log("BookshelfTagList render");

    const { bookshelfTagList } = useBookshelfTagList();

    return (
        <Parent>
            {
                bookshelfTagList && bookshelfTagList.length > 0 ?
                    <TagListAreaDiv>
                        <TagListAreaTitleDiv>
                            設定タグ
                        </TagListAreaTitleDiv>
                        {
                            bookshelfTagList.map((e: BookshelfTagType) => {

                                const tagId = e.tagId;

                                return (
                                    <TagButtonComponent
                                        title={e.tagName}
                                        btnStyle={{
                                            marginRight: "15px"
                                        }}
                                        key={tagId}
                                    />
                                )
                            })
                        }
                    </TagListAreaDiv>
                    :
                    `タグが登録されていません。`
            }
        </Parent>
    );
}