import { useEffect, type ReactNode } from 'react';
import type { CSSProperties } from 'styled-components';
import Modal from "react-modal";
import "../css/ModalComponent.css";
import { Z_INDEX_PARAM } from '../Const/CommonConst';


//引数の型
type propsType = {
    modalIsOpen: boolean,
    closeModal?: () => void,
    children: ReactNode,
    width?: string,
    height?: string,
    positionTop?: string,
    positionLeft?: string,
    style?: CSSProperties,
}

function ModalComponent(props: propsType) {

    useEffect(() => {
        const className = "html-modal-open";

        if (props.modalIsOpen) {
            document.documentElement.classList.add(className);
        } else {
            document.documentElement.classList.remove(className);
        }

        return () => {
            document.documentElement.classList.remove(className);
        };
    }, [props.modalIsOpen]);

    return (
        <Modal
            isOpen={props.modalIsOpen}
            //onAfterOpen={props.openModal}
            onRequestClose={props.closeModal}
            style={{
                content: {
                    position: 'fixed',
                    top: props.positionTop ?? '5%',
                    left: props.positionLeft ?? '14%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    width: props.width ?? '70%',
                    height: props.height ?? '85%',
                    zIndex: Z_INDEX_PARAM.MODAL,
                    ...props.style
                }
            }}
            ariaHideApp={false}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
        >
            {props.children}
        </Modal>
    );
}

export default ModalComponent;