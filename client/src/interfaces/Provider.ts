import { IUserLogged } from "../contexts/DashContext";
import { ILoginProps } from "./pages/login";
import { IRegisterPropsFunc } from "./pages/register";

export interface IUserContextProvider {
  loading: boolean;
  loginUser(data: ILoginProps): Promise<void>;
  registerUser(data: IRegisterPropsFunc): Promise<void>;
}

export interface IDashContextProvider {
  user: IUserLogged;
  setUser: React.Dispatch<React.SetStateAction<IUserLogged>>
}

export interface ILoginResponse {
  token: string;
}
