import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import store from './store';

const apiClient:AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: { 
        common: {
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json",
            Praga: "no-cache"
        }
    }
});

apiClient.interceptors.request.use( (config: AxiosRequestConfig) => {
    const state = store.getState();

    if(state.session.isLogged) {
        config.headers["authorization"] = `Bearer ${state.session.token}`;
    }
    
    return config;
});

export default apiClient;