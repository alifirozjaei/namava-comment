import React from "react";
import { createContext, useState } from "react";

export const ToastContext = createContext({
  toasts: [],
  addToast: () => {},
  clearToasts: () => {},
});

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success", closeTime = 5000) => {
    const id = crypto.randomUUID();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => removeToast(id), closeTime);
  };

  const removeToast = (id) => {
    setToasts((t) => t.filter((item) => item.id != id));
  };

  const clearToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, clearToasts }}>
      {children}
    </ToastContext.Provider>
  );
}
