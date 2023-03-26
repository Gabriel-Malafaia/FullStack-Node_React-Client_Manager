import axios from "axios";

// Instância do axios, para trabalhar com a minha api

const Api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

export default Api;
