import React from "react";
import styles from "./form-link.module.css";

const FormLink = ({ children }) => {
  return (
    <a href="#" className={styles["form-link"]}>
      {children}
    </a>
  );
};

export default FormLink;
