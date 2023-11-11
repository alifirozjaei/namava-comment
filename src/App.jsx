import React from "react";
import "./App.css";
import { ToastProvider } from "./context/ToastContext.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ToastWrapper from "./components/Toast/ToastWrapper.jsx";
import CommentPage from "./pages/CommentPage/CommentPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/comments",
    element: <CommentPage />,
  },
  {
    path: "/",
    element: <p>Home</p>,
  },
]);

const App = () => {
  return (
    <>
      <ToastProvider>
        <ToastWrapper />
        <RouterProvider router={router} />
      </ToastProvider>
    </>
  );
};

export default App;
