import { Outlet } from "react-router-dom";
import { useDashContext } from "../../contexts/DashContext";
import { CircularProgress } from "@mui/material";

// Proteção de rota que verifica se um usuário é autenticado.

const ProtectedRoutes = () => {
  const { isAuth } = useDashContext();

  return !isAuth ? <CircularProgress color="inherit" /> : <Outlet />;
};

export default ProtectedRoutes;
