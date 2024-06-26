import { GetStoredToken } from '@/utils/Token';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

api.interceptors.request.use(
  async (config) => {
    const token = GetStoredToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
