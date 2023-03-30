import { Outlet } from "react-router-dom";
import { useDashContext } from "../../contexts/DashContext";
import { CircularProgress } from "@mui/material";
import { StyledCyrcleDiv } from "./style";

// Proteção de rota que verifica se um usuário é autenticado.

const ProtectedRoutes = () => {
  const { isAuth } = useDashContext();

  return !isAuth ? (
    <StyledCyrcleDiv>
      <CircularProgress color="inherit" />
    </StyledCyrcleDiv>
  ) : (
    <Outlet />
  );
};

export default ProtectedRoutes;
