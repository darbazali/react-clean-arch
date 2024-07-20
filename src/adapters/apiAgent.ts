import axios, { AxiosInstance } from "axios";

export const apiAgent: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json",
    Authorization: "Bearer " + "token_from_state",
  },
});
