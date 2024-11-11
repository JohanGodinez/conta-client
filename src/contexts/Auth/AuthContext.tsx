import { createContext } from "react";
import { IUser } from "../../models";

interface IAuth {
  user: IUser | null;
}

interface IAction {
  type: "LOGIN" | "LOGOUT";
  payload: IUser | null;
}

export const AuthContext = createContext<{ user: IUser | null; dispatch: React.Dispatch<IAction> } | null>(null);

export const authReducer = (state: IAuth, action: IAction): IAuth => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
      };

    default:
      return state;
  }
};

