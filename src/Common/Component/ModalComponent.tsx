import React, { ReactElement, ReactNode } from 'react';
import Modal from 'react-modal';
import { IconType } from 'react-icons';
import { CSSProperties } from 'styled-components';


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