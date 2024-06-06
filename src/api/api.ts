import axios from 'axios';
import qs from 'qs';

const usernameAuth = import.meta.env.VITE_USERNAME_AUTH;
const passwordAuth = import.meta.env.VITE_PASSWORD_AUTH;

const token = btoa(`${usernameAuth}:${passwordAuth}`);

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  headers: {
    Authorization: `Basic ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [(data) => qs.stringify(data)],
});

export default api;
