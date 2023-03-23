import { Routes, Route } from "react-router";
import DefaultPage from "../pages/default";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}></Route>
    </Routes>
  );
};

export default RoutesApp;
