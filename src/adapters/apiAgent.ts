import axios, { AxiosInstance } from "axios";

export const apiAgent: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

// export const authorizedFetch = (
//   input: string | URL,
//   config?: AxiosRequestConfig,
// ): Promise<AxiosResponse> => {
//   const headers = config?.headers ?? {};
//   return apiAgent.request({
//     ...config,
//     url: input,
//     headers: {
//       ...headers,
//       Authorization: "Bearer " + "token_from_state",
//     },
//   });
// };
