import React, { ReactNode, useReducer } from "react";
import { AuthContext, authReducer } from "./AuthContext";
import { IAction, IAuth } from "../../models";

interface AuthProviderProp {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<IAuth, IAction>>(authReducer, {
    user: null,
  });

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};