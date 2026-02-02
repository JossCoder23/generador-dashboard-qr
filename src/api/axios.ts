import axios from 'axios';

const api = axios.create({
  baseURL: 'https://comerciald2.sg-host.com/api', // Tu URL de SiteGround
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor para añadir el Token en cada petición
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;