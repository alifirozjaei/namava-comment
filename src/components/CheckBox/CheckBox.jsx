import React from "react";
import styles from "./checkbox.module.css";

const CheckBox = ({ id, children, onChange, checked }) => {
  return (
    <label className={styles["checkbox-container"]} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <span className={styles.checkmark}></span>
      {children}
    </label>
  );
};

export default CheckBox;
