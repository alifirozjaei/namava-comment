import React from "react";
import CommentIcon from "../Icons/CommentIcon.jsx";
import styles from "./auth-navigation-box.module.css";
import { useNavigate } from "react-router-dom";
const AuthNavigationBox = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className={styles["box"]}>
      <div>
        <CommentIcon />
        {children}
      </div>
      <div>
        <button className={styles["register-btn"]}>ثبت نام</button>
        <button
          className={styles["login-btn"]}
          onClick={() => navigate("/login")}
        >
          ورود
        </button>
      </div>
    </div>
  );
};

export default AuthNavigationBox;
