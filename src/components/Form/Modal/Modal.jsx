import React, { useState } from "react";
import style from "./Modal.module.scss";

export const Modal = ({
    messageMainText,
    messageMainColor,
    messageSecondText,
    messageSecondColor,
    modalBackgroundColor,
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

    const modalBackgroundColorStyle = {
        backgroundColor: modalBackgroundColorData,
    };

    return (
        <>
            {isModalVisible && (
                <div className={style.containerModal} onClick={closeModal}>
                    <div
                        className={style.modal}
                        style={modalBackgroundColorStyle}
                    >
                        <div className={style.containerMessageMain}>
                            <p style={messageMainColorStyle}>{messageMainData}</p>
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
