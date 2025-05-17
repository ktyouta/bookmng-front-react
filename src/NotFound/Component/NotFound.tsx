import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

//引数の型
type porpType = {
    backUrl?: string,
    style?: CSSProperties,
}

//外側のスタイル
const OuterDiv = styled.div`
    box-sizing: border-box;
    padding-left: 8%;
    padding-top: 4%;
    color:white;
`;

export function NotFound(props: porpType) {
    return (
        <OuterDiv
            style={props.style}
        >
            <h1>404 NOT FOUND</h1>
            <p>お探しのページが見つかりませんでした。</p>
            {
                props.backUrl &&
                <Link to={props.backUrl}>Topに戻る</Link>
            }
        </OuterDiv>
    )
}