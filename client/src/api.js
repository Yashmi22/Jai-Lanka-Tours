import axios from 'axios';

// server local or railway
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000/api' 
        : 'https://jai-lanka-tours-production.up.railway.app/api');

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, 
    headers: {
        'Content-Type': 'application/json'
    }
});

// Auto-inject JWT token into the headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;