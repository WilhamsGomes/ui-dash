import axios from "axios";

export function apiClient() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_DOMAIN_API,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return api;
}
