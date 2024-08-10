import axios, { AxiosInstance } from "axios";
const TOKEN = "token_from_state";

export const apiAgent: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});
