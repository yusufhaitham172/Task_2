import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000/api', // ✅ Backend runs on port 4000
});

// ✅ Automatically attach token if found
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
