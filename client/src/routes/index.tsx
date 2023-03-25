import { Routes, Route, Navigate } from "react-router";
import DashboardPage from "../pages/dashboard";
import DefaultPage from "../pages/default";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default RoutesApp;
