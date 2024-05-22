import axios from 'axios';
// import { routesAuth } from '~/configs';
import { STORAGE_KEY } from '../constants/storageKey';
import { configMicro } from './serverMicro';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosMicro = axios.create({
  baseURL: configMicro.API_URL,
  timeout: configMicro.DEFAULT_REQUEST_TIMEOUT,
});

// Request interceptor for API calls
axiosMicro.interceptors.request.use(
  async (config: any) => {
    const accessToken = await AsyncStorage.getItem(STORAGE_KEY.ACCESS_TOKEN); // Sử dụng await để lấy access token
    config.headers = {
      Accept: 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : '', // Đảm bảo token không null
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosMicro.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem(STORAGE_KEY.REFRESH_TOKEN); // Sử dụng await để lấy refresh token
      if (refreshToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
        return axiosMicro(originalRequest);
      }
    }
    if (error?.response?.status === 401) {
      await AsyncStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN); // Sử dụng await để xoá token
      // window.location.replace(routesAuth.login); // Xử lý điều hướng
    }

    return Promise.reject(error);
  },
);

export { axiosMicro };
