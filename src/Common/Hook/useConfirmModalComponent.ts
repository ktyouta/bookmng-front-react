import useSwitch from "./useSwitch";

export function useConfirmModalComponent() {

    // モーダル開閉フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();

    return {
        isOpenModal,
        openModal,
        closeModal,
    };
}