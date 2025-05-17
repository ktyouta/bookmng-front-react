import React from "react";
import styled from "styled-components";
import { useToast } from "../Hook/useToast";


const BaseParent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  min-width: 165px;
  text-align: center;
  font-size: 14px;
  display:${({ isOpen }) => (isOpen ? "block" : "none")};
`;

// infoのトースト
const InfoToast = styled(BaseParent)`
  background:#3C763D;
`;

// warnのトースト
const WarnToast = styled(BaseParent)`
  background:#FFF8E1;
`;

// errorのトースト
const ErrorToast = styled(BaseParent)`
  background:#FFEBEE;
`;

type statusType = `info` | `warn` | `error`;

// トーストのスタイルリスト
const ToastStyleLists = {
    info: InfoToast,
    warn: WarnToast,
    error: ErrorToast,
}

export type toastStatusType = {
    message: string,
    toastType: statusType,
}

type propsType = {
    status: toastStatusType
}

// 初期値
export const TOAST_INIT: toastStatusType = {
    message: ``,
    toastType: `info`,
}

export function ToastComponent(props: propsType) {

    return (
        <React.Fragment>
            {
                props.status.message &&
                <Toast
                    status={props.status}
                />
            }
        </React.Fragment>
    );
}


function Toast(props: propsType) {

    const Component = ToastStyleLists[props.status.toastType];

    const { isOpen } = useToast();

    return (
        <Component
            isOpen={isOpen}
        >
            {props.status.message}
        </Component>
    );
}