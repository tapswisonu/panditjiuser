import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

const client = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token automatically
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('panditji_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const authAPI = {
  register: (data: { name: string; phone: string; email?: string; password: string; role?: string }) =>
    client.post('/auth/register', data),
  login: (data: { phone: string; password: string }) =>
    client.post('/auth/login', data),
};

export default client;
