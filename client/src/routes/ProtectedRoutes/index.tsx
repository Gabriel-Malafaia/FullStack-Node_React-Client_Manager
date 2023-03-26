import { Outlet } from "react-router-dom";
import { useDashContext } from "../../contexts/DashContext";

const ProtectedRoutes = () => {
  const { isAuth } = useDashContext();

  return !isAuth ? <h1>Loading...</h1> : <Outlet />;
};

export default ProtectedRoutes;
