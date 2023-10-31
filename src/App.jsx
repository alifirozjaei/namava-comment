import React from "react";
import "./App.css";
import NamavaIcon from "./components/Icons/NamavaIcon.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import ToastWrapper from "./components/Toast/ToastWrapper.jsx";
const App = () => {
  return (
    <>
      <ToastProvider>
        <div className="app">
          <div className="form-container">
            <div className="row justify-content-between align-items-center">
              <NamavaIcon />
              <button className="btn">ثبت نام</button>
            </div>
            <div>
              <ToastWrapper />
            </div>
            <LoginForm />
          </div>
        </div>
      </ToastProvider>
    </>
  );
};

export default App;
