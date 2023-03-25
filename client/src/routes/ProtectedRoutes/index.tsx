import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDashContext } from "../../contexts/DashContext";
import Api from "../../service/api";

const ProtectedRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useDashContext();

  useEffect(() => {
    const userAuth = async () => {
      try {
        const token = localStorage.getItem("@UserToken");
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { data } = await Api.get("/users/get");
        setIsAuth(true);
        setUser(data);
      } catch {
        navigate("/");
      }
    };

    userAuth();
  }, []);

  return !isAuth ? <h1>Loading...</h1> : <Outlet />;
};

export default ProtectedRoutes;
