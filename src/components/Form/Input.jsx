import React, { useState } from "react";
import styles from "./input.module.css";
import ShowEyeIcon from "../Icons/ShowEyeIcon.jsx";
import { HideEyeIcon } from "../Icons/HideEyeIcon.jsx";
const Input = ({ id, type, placeholder, label, changeHandler, value }) => {
  const [isHiddenPasswrd, setIsHiddenPassword] = useState(true);

  const getInputType = (inputType, isHidden) => {
    if (inputType == "password") {
      if (isHidden) {
        return "password";
      } else {
        return "text";
      }
    } else {
      return inputType;
    }
  };

  return (
    <div className={styles["form-control"]}>
      <label htmlFor="passwrod" className={styles["form-label"]}>
        {label}
      </label>
      <input
        type={getInputType(type, isHiddenPasswrd)}
        id={id}
        className={styles["form-input"]}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e.target.value)}
        value={value}
      />
      {type == "password" && !!value && (
        <span
          className={styles["hide-button"]}
          onClick={() => setIsHiddenPassword((hp) => !hp)}
        >
          {isHiddenPasswrd && <ShowEyeIcon />}
          {!isHiddenPasswrd && <HideEyeIcon />}
        </span>
      )}
    </div>
  );
};

export default Input;
