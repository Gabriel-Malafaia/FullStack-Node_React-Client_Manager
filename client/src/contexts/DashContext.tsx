import Api from "../service/api";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildrenNode } from "../interfaces/Global";
import { IDashContextProvider } from "../interfaces/Provider";
import { toastError, toastSuccess } from "../styles/components/Toastify";
import { IRegisterClientContactProps } from "../interfaces/pages/dashboard";
import {
  IClientProps,
  IEditClientProps,
  IEditProfileProps,
  IUserLogged,
  IUserLoggedClient,
} from "../interfaces/pages/dashboard";

// Contexto da Dashboard

const dashContext = createContext<IDashContextProvider>(
  {} as IDashContextProvider
);

const DashContextProvider = ({ children }: IChildrenNode) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

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

      setLoading(false);
    }
  }

  async function registerClientContact(data: IRegisterClientContactProps) {
    setLoading(true);

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

      setLoading(false);
    }
  }

  async function editClientContact(data: IRegisterClientContactProps) {
    setLoading(true);
    const { contactId } = actualContact;

    try {
      await Api.patch(`/contacts/info/${contactId}`, data);
      toastSuccess("Contato editado!");
      setUpdateUser(!updateUser);
      setActualDialog("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }

      setLoading(false);
    } finally {
      setActualDialog("");
    }
  }

  async function deleteClientContact() {
    setLoading(true);
    const { contactId } = actualContact;

    try {
      await Api.delete(`/contacts/info/${contactId}`);
      toastSuccess("Contato deletado!");
      setUpdateUser(!updateUser);
      setActualDialog("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    }
  }

  async function editClient(data: IEditClientProps) {
    setLoading(true);
    const { clientId } = actualContact;

    try {
      await Api.patch(`/contacts/${clientId}`, data);
      toastSuccess("Contato editado!");
      setUpdateUser(!updateUser);
      setActualDialog("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }

      setLoading(false);
    }
  }

  async function deleteClient() {
    setLoading(true);
    const { clientId } = actualContact;

    try {
      await Api.delete(`/contacts/${clientId}`);
      toastSuccess("Cliente deletado!");
      setUpdateUser(!updateUser);
      setActualDialog("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }

      setLoading(false);
    }
  }

  async function editProfile(data: IEditProfileProps) {
    setLoading(true);
    const { password } = data;
    if (!password) {
      delete data.password;
    }

    const { id } = user;
    try {
      await Api.patch(`/users/${id}`, data);
      toastSuccess("Informações salvas!");
      setUpdateUser(!updateUser);
      setActualDialog("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }

      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    const userAuth = async () => {
      try {
        const token = localStorage.getItem("@UserToken");
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const [userData, contactsData] = await Promise.all([
          Api.get("/users/get"),
          Api.get("/contacts"),
        ]);

        setIsAuth(true);
        setUser(userData.data);
        setContacts(contactsData.data);
      } catch {
        navigate("/");
      } finally {
        setLoading(false);
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
        editClient,
        deleteClient,
        editProfile,
        loading,
        setLoading,
      }}
    >
      {children}
    </dashContext.Provider>
  );
};

const useDashContext = () => useContext(dashContext);

export { DashContextProvider, useDashContext };
