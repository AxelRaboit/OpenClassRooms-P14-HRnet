import React, { useState } from "react";
import style from "./Modal.module.scss";

export const Modal = ({
    messageMainText,
    messageMainColor,
    messageSecondText,
    messageSecondColor,
    modalBackgroundColor,
    modalWidth,
    closeButton,
}) => {
    const [messageMainData, setMessageMainData] = useState(
        messageMainText || "Success!"
    );
    const [messageMainColorData, setMessageMainColorData] = useState(
        messageMainColor || "#ffffff"
    );

    const [messageSecondTextData, setMessageSecondTextData] = useState(
        messageSecondText || null
    );
    const [messageSecondColorData, setMessageSecondColorData] = useState(
        messageSecondColor || "#ffffff"
    );

    const [modalBackgroundColorData, setModalBackgroundColorData] = useState(
        modalBackgroundColor || "#1289c9"
    );

    const [closeButtonData, setCloseButtonData] = useState(closeButton || false);

    const [modalWidthData, setModalWidthData] = useState(modalWidth || "600px");

    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const messageMainColorStyle = {
        color: messageMainColorData,
    };

    const messageSecondColorStyle = {
        color: messageSecondColorData,
    };

    const modalStyle = {
        backgroundColor: modalBackgroundColorData,
        width: modalWidthData,
    };

    return (
        <>
            {isModalVisible && (
                <div className={style.containerModal} onClick={closeModal}>
                    <div className={style.modal} style={modalStyle}>
                        {closeButtonData && (
                            <div className={style.containerClose}>
                                <button onClick={closeModal}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        )}
                        <div className={style.containerMessageMain}>
                            <p style={messageMainColorStyle}>
                                {messageMainData}
                            </p>
                        </div>
                        {messageSecondTextData && (
                            <div className={style.containerMessageSecond}>
                                <p style={messageSecondColorStyle}>
                                    {messageSecondTextData}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};