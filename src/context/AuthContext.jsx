import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // get token value from localStorage
    const token = localStorage.getItem("token");
    const tokenExpireTime = localStorage.getItem("expireTime");
    if (token && tokenExpireTime) {
      // check token is expired
      const remainTime =
        new Date(+tokenExpireTime).getTime() - new Date().getTime();
      if (remainTime > 0) {
        setToken(token);
      } else {
        // if token is expired then remove token from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("expireTime");
      }
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expireTime");
    setToken(null);
  };

  const loginHandler = (newToken) => {
    // calculate expire time timestamp
    const expireDurationMin = 60;
    const expireTime = new Date().getTime() + expireDurationMin * 60 * 1000;

    localStorage.setItem("token", newToken);
    localStorage.setItem("expireTime", expireTime);
    setToken(newToken);
  };

  const authContextValue = {
    token: token,
    isLoggedIn: !!token,
    logout: logoutHandler,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
