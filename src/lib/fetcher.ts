import "server-only";
import axiosbase, { InternalAxiosRequestConfig } from "axios";

export const api = axiosbase.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetcher = async (endPoint: string, options = {}) => {
  const result = await api
    .get(endPoint, {
      ...options,
    })
    .then((res) => {
      if (!(res.status === 200)) throw new Error(res.statusText);
      return res.data;
    });
  return result;
};
