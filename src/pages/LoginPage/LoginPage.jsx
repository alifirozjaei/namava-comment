import React from "react";
import NamavaIcon from "../../components/Icons/NamavaIcon.jsx";
import LoginForm from "../../components/Login/LoginForm.jsx";
import styles from "./login-page.module.css";
const LoginPage = () => {
  return (
    <div className={styles["login"]}>
      <div className={styles["form-container"]}>
        <div className="row justify-content-between align-items-center">
          <NamavaIcon />
          <button className={styles["btn"]}>ثبت نام</button>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
