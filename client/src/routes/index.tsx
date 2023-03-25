import { Routes, Route, Navigate } from "react-router";
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
    </Routes>
  );
};

export default RoutesApp;
