import styled from "styled-components";
import { useBookshelfSearchConditionMain } from "../Hook/useBookshelfSearchConditionMain";
import type { comboType } from "../../Common/Component/ComboComponent";
import ComboComponent from "../../Common/Component/ComboComponent";


const Parent = styled.div`
    width: 100%;
    height: 87%;
    box-sizing: border-box;
    padding-left: 6%;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
`;

const ConditionAreaDiv = styled.div`
  width: 97%;
  height: 97%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 3%;
`;

const InputDiv = styled.div`
  display:flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8%;
  box-sizing: border-box;
  width:100%;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 17%;
  margin-right: 10px;
  white-space: normal;
  word-wrap: break-word;
`;

type propsType = {
    close: () => void;
}

export function BookshelfSearchConditionMain(props: propsType) {

    console.log("BookshelfSearchConditionMain render");

    const {
        readStatusSelectList,
        changeViewStatus,
        favoriteLevelList,
        selectedFavoriteVideoFavoriteLevel,
        changeFavoriteLevel,
        selectedBookshelfReadStatus, } = useBookshelfSearchConditionMain({ ...props });

    return (
        <Parent>
            <ConditionAreaDiv>
                {
                    readStatusSelectList && readStatusSelectList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            読書状況
                        </InputLabel>
                        <ComboComponent
                            combo={readStatusSelectList}
                            initValue={selectedBookshelfReadStatus ?? readStatusSelectList[0].value}
                            onChange={changeViewStatus}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                }
                {
                    favoriteLevelList && favoriteLevelList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            お気に入り度
                        </InputLabel>
                        <ComboComponent
                            combo={favoriteLevelList}
                            initValue={selectedFavoriteVideoFavoriteLevel ?? favoriteLevelList[0].value}
                            onChange={changeFavoriteLevel}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                }
            </ConditionAreaDiv>
        </Parent>
    );
}