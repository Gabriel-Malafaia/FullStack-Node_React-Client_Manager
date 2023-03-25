import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes";
import GlobalStyles from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>
);
