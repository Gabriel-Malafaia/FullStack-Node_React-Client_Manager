import DashboardPage from "../pages/dashboard";
import DefaultPage from "../pages/default";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProtectedRoutes from "./ProtectedRoutes";
import { Routes, Route } from "react-router";
import { DashContextProvider } from "../contexts/DashContext";

// Rotas da aplicação

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <DashContextProvider>
            <ProtectedRoutes />
          </DashContextProvider>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
