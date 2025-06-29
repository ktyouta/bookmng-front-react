import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useBookshelfMemoCreateInput } from "../Hook/useBookshelfMemoCreateInput";
import { useBookshelfMemoUpdateInput } from "../Hook/useBookshelfMemoUpdateInput";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { BookshelfMemoUpdateIconArea } from "./BookshelfMemoUpdateIconArea";
import { BookshelfMemoCancelIconArea } from "./BookshelfMemoCancelIconArea";


const MemoInputAreaDiv = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  display:flex;
`;

const EditIconAreaDiv = styled.div`
  width: 7%;
  height: 38px;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
`;


type propsType = {
    memoSeq: number,
    closeEdit: () => void,
    inputMemo: string,
}


export function BookshelfMemoEditInput(props: propsType) {

    console.log("BookshelfMemoEditInput render");

    const {
        inputMemo,
        setInputMemo,
        updateMemo,
    } = useBookshelfMemoUpdateInput({ ...props });

    return (
        <MemoInputAreaDiv>
            <BaseTextbox
                textWidth="92%"
                placeholder="メモ"
                value={inputMemo}
                onChange={setInputMemo}
                style={{
                    height: "34px",
                    backgroundColor: "#E4EBF1",
                }}
            />
            <EditIconAreaDiv>
                {/* キャンセル */}
                <BookshelfMemoCancelIconArea
                    closeEdit={props.closeEdit}
                />
                {/* 更新 */}
                <BookshelfMemoUpdateIconArea
                    updateMemo={updateMemo}
                />
            </EditIconAreaDiv>
        </MemoInputAreaDiv>
    );
}