import axios from 'axios';

// server local or railway
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api' 
    : 'https://jai-lanka-tours-production.up.railway.app/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, 
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;