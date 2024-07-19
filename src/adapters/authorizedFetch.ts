export const authorizedFetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  const headers = init?.headers ?? {};
  return fetch(input, {
    ...init,
    headers: {
      ...headers,
      Authorization: "Bearer " + "token_from_state",
    },
  });
};
