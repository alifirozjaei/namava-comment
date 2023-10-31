import React from "react";
import "./App.css";
import { ToastProvider } from "./context/ToastContext.jsx";
import { Login } from "./pages/Login.jsx";
import ToastWrapper from "./components/Toast/ToastWrapper.jsx";
const App = () => {
  return (
    <>
      <ToastProvider>
        <ToastWrapper />
        <Login />
      </ToastProvider>
    </>
  );
};

export default App;
