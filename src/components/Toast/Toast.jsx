import React from "react";
import styles from "./toast.module.css";
import WarningIcon from "../Icons/WarningIcon.jsx";

const Toast = ({ message, type }) => {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {type == "error" && <WarningIcon />}
      <div>{message}</div>
    </div>
  );
};

export default Toast;
