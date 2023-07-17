import React, { useState } from "react";
import style from "./Modal.module.scss";

export const Modal = ({
    modalBackgroundColor,
    modalTextColor,
    modalMinWidth,
    modalMaxWidth,
    closeButton,
    children
}) => {

    const [modalBackgroundColorData] = useState(
        modalBackgroundColor || "#1289c9"
    );

    const [closeButtonData] = useState(closeButton || true);

    const [isModalVisible, setIsModalVisible] = useState(true);

    const [childrenData] = useState(children || "Succes!");

    const [modalMinWidthData] = useState(modalMinWidth || "");

    const [modalMaxWidthData] = useState(modalMaxWidth || "600px");

    const [modalTextColorData] = useState(modalTextColor || "#fff");

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const modalStyle = {
        backgroundColor: modalBackgroundColorData,
        minWidth: modalMinWidthData,
        maxWidth: modalMaxWidthData,
    };

    const childrenStyle = {
        color: modalTextColorData,
    };

    const closeButtonStyle = {
        color: modalBackgroundColor,
    }

    return (
        <>
            {isModalVisible && (
                <div className={style.containerModal} onClick={closeModal}>
                    <div className={style.modal} style={modalStyle}>
                        {closeButtonData && (
                            <div className={style.containerClose}>
                                <button onClick={closeModal} style={closeButtonStyle}>
                                    <span>&times;</span>
                                </button>
                            </div>
                        )}
                        {childrenData && (
                            <div className={style.containerChildren} style={childrenStyle}>
                                {childrenData}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
