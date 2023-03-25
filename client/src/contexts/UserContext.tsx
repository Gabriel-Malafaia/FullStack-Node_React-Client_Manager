import Api from "../service/api";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IChildrenNode } from "../interfaces/Global";
import { ILoginProps } from "../interfaces/pages/login";
import { ILoginResponse, IUserContextProvider } from "../interfaces/Provider";
import {
  toastError,
  toastSuccess,
  toastSuccessBottom,
} from "../styles/components/Toastify";
import { useNavigate } from "react-router-dom";
import { IRegisterPropsFunc } from "../interfaces/pages/register";

const userContext = createContext<IUserContextProvider>(
  {} as IUserContextProvider
);

const UserContextProvider = ({ children }: IChildrenNode) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function loginUser(data: ILoginProps) {
    setLoading(true);

    try {
      const request = await Api.post("/sessions", data);
      const response: ILoginResponse = request.data;
      localStorage.setItem("@UserToken", response.token);
      toastSuccessBottom("Bem-vindo à Contacts Manager!");
      navigate("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function registerUser(data: IRegisterPropsFunc) {
    if (data.confirmPassword != data.password) {
      toastError("Senha e confirmação de senha devem ser iguais.");
      return;
    }

    setLoading(true);
    delete data.confirmPassword;

    try {
      await Api.post("/users", data);
      toastSuccess("Cadastramos você, agora faça o login!");
      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <userContext.Provider value={{ loading, loginUser, registerUser }}>
      {children}
    </userContext.Provider>
  );
};

const useHomeContext = () => useContext(userContext);

export { UserContextProvider, useHomeContext };
