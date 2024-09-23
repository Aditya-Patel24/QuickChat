import React, { createContext, useContext, useState } from "react";
import Cookie from "js-cookie";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialUserState = Cookie.get("ChatApp") || localStorage.getItem("jwt");
  const [authUser, setAuthUser] = useState(initialUserState? JSON.parse(initialUserState): undefined);
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);