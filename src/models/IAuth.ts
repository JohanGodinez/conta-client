import { IUser } from "./IUser";

export interface IAuth {
  user: IUser | null;
}

export interface IAction {
  type: "LOGIN" | "LOGOUT";
  payload: IUser | null;
}