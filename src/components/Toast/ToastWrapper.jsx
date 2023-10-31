import React, { useContext } from "react";
import { ToastContext } from "../../context/ToastContext.jsx";
import styles from "./toast-wrapper.module.css";
import Toast from "./Toast.jsx";

const ToastWrapper = () => {
  const toasts = useContext(ToastContext);
  return (
    <div className={styles["toast-container"]}>
      {toasts.toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  );
};

export default ToastWrapper;
