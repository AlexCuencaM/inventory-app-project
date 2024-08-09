import axios, { AxiosInstance } from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const axiosClient: AxiosInstance = axios.create({
    baseURL: `${BASE_URL}api/`
  });