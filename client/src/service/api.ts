import axios from "axios";

// Instância do axios, para trabalhar com a minha api

const Api = axios.create({
  baseURL: "https://full-stack-node-react-client-manager.vercel.app",
  timeout: 5000,
});

export default Api;
