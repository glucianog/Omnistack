import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.25.2:8000',
});

export default api;