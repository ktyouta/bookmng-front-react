import React from "react";
import styled from "styled-components";


type propsType = {
    message: string,
    keyword: string,
    id?: string,
}

const HightlightSpan = styled.span`
  background-color:blue;
`;

export function HighlightTextComponent(props: propsType) {

    const messageSplitList = props.message.split(props.keyword);

    return (
        <React.Fragment>
            {
                messageSplitList.map((e: string, index: number) => {
                    return (
                        <React.Fragment
                            key={`${props.id}-${index}`}
                        >
                            {e}
                            {
                                index < messageSplitList.length - 1 &&
                                <HightlightSpan>
                                    {props.keyword}
                                </HightlightSpan>
                            }
                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    );

}