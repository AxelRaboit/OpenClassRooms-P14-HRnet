import React from "react";
import style from "./Modal.module.scss";

export const Modal = ({ text }) => {

  const OnClickRemoveTheModal = () => {
    const modal = document.querySelector(`.${style.containerModal}`);
    modal.style.display = "none";
  }
  
  return (
    <div className={style.containerModal} onClick={OnClickRemoveTheModal}>
      <div className={style.modal}>
        <p>{text}</p>
        <span>Click anywhere to close</span>
      </div>
    </div>
  );
};
