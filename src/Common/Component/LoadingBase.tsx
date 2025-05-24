import type { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../Const/CommonConst";

//引数の型
type propsType = {
    top?: string,
    left?: string,
}

function LoadingBase(props: propsType) {

    const override: CSSProperties = {
        display: "block",
        borderColor: "#a9a9a9",
        position: "fixed",
        top: props.top ?? "50%",
        left: props.left ?? "50%",
        zIndex: Z_INDEX_PARAM.WAITL_OADING,
    };

    return (
        <ClipLoader
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default LoadingBase;