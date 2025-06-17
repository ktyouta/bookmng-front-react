import React, { type CSSProperties, forwardRef, useEffect, useState } from 'react';
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { IconComponent } from './IconComponent';
import BaseTextbox from './BaseTextbox';


//引数の型
type propsType = {
    value?: string,
    length?: number,
    textWidth?: string,
    bgColor?: string,
    disabled?: boolean,
    onChange?: (e: string) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    placeholder?: string,
    autoComplete?: boolean,
    textboxStyle?: CSSProperties,
    iconWidth?: string,
    width?: string,
    height?: string,
    style?: CSSProperties,
    clear: () => void,
}

const OuterDiv = styled.div<{ width?: string, height?: string, bgColor?: string, }>`
  width: ${({ width }) => (width ?? "400px")};
  height: ${({ height }) => (height ?? "30px")};
  background-color:${({ bgColor }) => (bgColor ?? "white")};
  border:solid 1px rgb(118, 118, 118);
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const IconDiv = styled.div<{ iconWidth?: string, iconHeight?: string }>`
    width: ${({ iconWidth }) => (iconWidth ?? "20px")};
    height: ${({ iconHeight }) => (iconHeight ?? "20px")};
    display: flex;
    align-items: center;
    margin-right: 1%;
    box-sizing: border-box;
`;


export function ClearableTextbox(props: propsType) {

    return (
        <OuterDiv
            width={props.width}
            height={props.height}
            style={props.style}
        >
            <BaseTextbox
                length={props.length}
                onChange={props.onChange}
                value={props.value}
                bgColor={props.bgColor}
                disabled={props.disabled}
                onKeyDown={props.onKeyDown}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                style={{
                    ...props.textboxStyle,
                    border: "none",
                    outline: "none",
                    flex: "1",
                    boxSizing: "border-box",
                }}
            />
            <IconDiv
                iconHeight={props.height}
                iconWidth={props.iconWidth}
            >
                {
                    props.value && props.value.length > 0 &&
                    <IconComponent
                        icon={RxCross1}
                        onclick={props.clear}
                        size="100%"
                        style={{ color: "#2C3E50" }}
                    />
                }
            </IconDiv>
        </OuterDiv>
    );
}
