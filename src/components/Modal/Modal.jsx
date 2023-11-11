import React from "react";
import styles from "./modal.module.css";
import CommentIcon from "../Icons/CommentIcon.jsx";
import CloseIcon from "../Icons/CloseIcon.jsx";
import { useNavigate } from "react-router-dom";
const Modal = ({ handleClose }) => {
  const navigate = useNavigate();
  const modalCloseHandler = (e) => {
    if (e.target.className === styles["modal"]) {
      handleClose();
    }
  };
  
  return (
    <div className={styles["modal"]} onClick={modalCloseHandler}>
      <div className={styles["modal-body"]}>
        <span className={styles["close-icon"]} onClick={handleClose}>
          <CloseIcon />
        </span>
        <CommentIcon />
        <div>برای ثبت نظر، ابتدا باید وارد شوید.</div>
        <button onClick={() => navigate("/login")}>ورود / ثبت نام</button>
        <span className={styles["close-span"]} onClick={handleClose}>
          بستن
        </span>
      </div>
    </div>
  );
};

export default Modal;
