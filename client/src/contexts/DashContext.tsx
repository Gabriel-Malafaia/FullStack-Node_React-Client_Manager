import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildrenNode } from "../interfaces/Global";
import {
  IClientProps,
  IUserLogged,
  IUserLoggedClient,
} from "../interfaces/pages/dashboard";
import { IDashContextProvider } from "../interfaces/Provider";
import Api from "../service/api";
import { toastError, toastSuccess } from "../styles/components/Toastify";
import { IRegisterClientContactProps } from "../interfaces/pages/dashboard";

const dashContext = createContext<IDashContextProvider>(
  {} as IDashContextProvider
);

const DashContextProvider = ({ children }: IChildrenNode) => {
  const [user, setUser] = useState({} as IUserLogged);
  const [contacts, setContacts] = useState<IUserLoggedClient[]>();
  const [isAuth, setIsAuth] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const [actualContact, setActualContact] = useState({
    contactId: "",
    clientId: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
  });
  const [actualDialog, setActualDialog] = useState("");

  const navigate = useNavigate();

  async function registerClient(data: IClientProps) {
    try {
      await Api.post("/contacts", data);
      toastSuccess("Cliente cadastrado!");
      setUpdateUser(!updateUser);
      setOpenDialog(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      // setLoading(false);
    }
  }

  async function registerClientContact(data: IRegisterClientContactProps) {
    const { clientId } = actualContact;

    try {
      await Api.post(`/contacts/info/${clientId}`, data);
      toastSuccess("Contato cadastrado!");
      setUpdateUser(!updateUser);
      setActualDialog("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      // setLoading(false);
    }
  }

  async function editClientContact(data: IRegisterClientContactProps) {
    const { contactId } = actualContact;

    try {
      await Api.patch(`/contacts/info/${contactId}`, data);
      toastSuccess("Contato editado!");
      setUpdateUser(!updateUser);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setActualDialog("");
      // setLoading(false);
    }
  }

  async function deleteClientContact() {
    const { contactId } = actualContact;

    try {
      await Api.delete(`/contacts/info/${contactId}`);
      toastSuccess("Contato deletado!");
      setUpdateUser(!updateUser);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setActualDialog("");
      // setLoading(false);
    }
  }

  useEffect(() => {
    const userAuth = async () => {
      try {
        const token = localStorage.getItem("@UserToken");
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { data } = await Api.get("/users/get");

        const [userData, contactsData] = await Promise.all([
          Api.get("/users/get"),
          Api.get("/contacts"),
        ]);

        setIsAuth(true);
        setUser(userData.data);
        setContacts(contactsData.data);
      } catch {
        navigate("/");
      }
    };

    userAuth();
  }, [updateUser]);

  return (
    <dashContext.Provider
      value={{
        user,
        setUser,
        contacts,
        openDialog,
        setOpenDialog,
        registerClient,
        isAuth,
        registerClientContact,
        editClientContact,
        deleteClientContact,
        actualContact,
        setActualContact,
        actualDialog,
        setActualDialog,
      }}
    >
      {children}
    </dashContext.Provider>
  );
};

const useDashContext = () => useContext(dashContext);

export { DashContextProvider, useDashContext };
