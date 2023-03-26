import { ILoginProps } from "./pages/login";
import { IRegisterPropsFunc } from "./pages/register";
import {
  IClientProps,
  IEditClientProps,
  IEditProfileProps,
  IRegisterClientContactProps,
  IUserLogged,
  IUserLoggedClient,
} from "./pages/dashboard";

// Interfaces dos providers

export interface IUserContextProvider {
  loading: boolean;
  loginUser(data: ILoginProps): Promise<void>;
  registerUser(data: IRegisterPropsFunc): Promise<void>;
}

export interface IDashContextProvider {
  user: IUserLogged;
  setUser: React.Dispatch<React.SetStateAction<IUserLogged>>;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  registerClient(data: IClientProps): Promise<void>;
  isAuth: boolean;
  contacts: IUserLoggedClient[] | undefined;
  registerClientContact(data: IRegisterClientContactProps): Promise<void>;
  editClientContact: (data: IRegisterClientContactProps) => Promise<void>;
  deleteClientContact(): Promise<void>;
  actualContact: {
    contactId: string;
    clientId: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
  };
  setActualContact: React.Dispatch<
    React.SetStateAction<{
      contactId: string;
      clientId: string;
      clientName: string;
      clientEmail: string;
      clientPhone: string;
    }>
  >;
  actualDialog: string;
  setActualDialog: React.Dispatch<React.SetStateAction<string>>;
  editClient(data: IEditClientProps): Promise<void>;
  deleteClient(): Promise<void>;
  editProfile(data: IEditProfileProps): Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILoginResponse {
  token: string;
}
