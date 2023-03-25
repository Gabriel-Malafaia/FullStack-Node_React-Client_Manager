import { Routes, Route, Navigate } from "react-router";
import { DashContextProvider } from "../contexts/DashContext";
import DashboardPage from "../pages/dashboard";
import DefaultPage from "../pages/default";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProtectedRoutes from "./ProtectedRoutes";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
