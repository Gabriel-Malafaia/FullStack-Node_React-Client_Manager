import { createContext, useContext, useState } from "react";
import { IChildrenNode } from "../interfaces/Global";
import { IDashContextProvider } from "../interfaces/Provider";

const dashContext = createContext<IDashContextProvider>(
  {} as IDashContextProvider
);

export interface IUserLoggedContacts {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface IUserLogged {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  contacts: IUserLoggedContacts[];
}

const DashContextProvider = ({ children }: IChildrenNode) => {
  const [user, setUser] = useState({} as IUserLogged);
  return <dashContext.Provider value={{user, setUser}}>{children}</dashContext.Provider>;
};

const useDashContext = () => useContext(dashContext);

export { DashContextProvider, useDashContext };
