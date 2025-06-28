import styled from "styled-components";
import { format } from "date-fns";
import { useBookshelfMemoContent } from "../Hook/useBookshelfMemoContent";
import React from "react";
import { BookshelfMemoEditInput } from "./BookshelfMemoEditInput";
import { BookshelfMemoEditIconArea } from "./BookshelfMemoEditIconArea";
import { BookshelfMemoDeleteIconArea } from "./BookshelfMemoDeleteIconArea";
import { ConfirmModalComponent } from "../../Common/Component/ConfirmModalComponent";
import type { BookshelfMemoType } from "../Type/BookshelfMemoType";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
`;

const MemoDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 8px;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
`;

const IconDiv = styled.div`
    box-sizing: border-box;
    width:8%;
    display:flex;
    align-items: center;
    justify-content: end;
    padding-right: 1%;
    position:relative;
`;

const MetaDiv = styled.div`
    font-size:13px;
    width:95%;
    display: flex;
    align-items: center;
`;


type propsType = {
    bookshelfMemo: BookshelfMemoType,
}

export function BookshelfMemoContent(props: propsType) {

    console.log("BookshelfMemoContent render");

    const {
        deleteMemo,
        isOpenEdit,
        openEdit,
        closeEdit,
        isOpenModal,
        closeModal,
        executeDelete,
    } = useBookshelfMemoContent();

    const data = props.bookshelfMemo;
    const memo = data.memo;
    const memoSeq = data.seq;
    const updateDate = format(new Date(data.updateDate), "yyyy/MM/dd  HH:mm");

    return (
        <Parent>
            {
                isOpenEdit ?
                    <React.Fragment>
                        {/* 編集中 */}
                        <BookshelfMemoEditInput
                            videoMemoSeq={memoSeq}
                            closeEdit={closeEdit}
                            inputMemo={memo}
                        />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {/* 閲覧 */}
                        <MemoDiv>
                            {memo}
                        </MemoDiv>
                        <LowerDiv>
                            <MetaDiv>
                                {updateDate}
                            </MetaDiv>
                            <IconDiv>
                                {/* 編集 */}
                                <BookshelfMemoEditIconArea
                                    openEdit={openEdit}
                                />
                                {/* 削除 */}
                                <BookshelfMemoDeleteIconArea
                                    deleteMemo={() => { deleteMemo() }}
                                />
                            </IconDiv>
                        </LowerDiv>
                        <ConfirmModalComponent
                            isOpenModal={isOpenModal}
                            closeModal={closeModal}
                            titleMessage={`メモを削除しますか？`}
                            clickOk={() => {
                                executeDelete(memoSeq);
                            }}
                        />
                    </React.Fragment>
            }
        </Parent>
    );
}