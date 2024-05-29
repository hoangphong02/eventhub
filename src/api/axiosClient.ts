// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// // import { routesAuth } from '~/configs';
// import { STORAGE_KEY } from '../constants/storageKey';
// import { configMicro } from './serverMicro';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const axiosClient = axios.create({
//   baseURL: configMicro.API_URL,
//   // timeout: configMicro.DEFAULT_REQUEST_TIMEOUT,
// });

// // Request interceptor for API calls
// axiosClient.interceptors.request.use(
//   async (config: any) => {
//     const accessToken = await AsyncStorage.getItem(STORAGE_KEY.ACCESS_TOKEN); // Sử dụng await để lấy access token
//     config.headers = {
//       Accept: 'application/json',
//       Authorization: accessToken ? `Bearer ${accessToken}` : '', // Đảm bảo token không null
//     };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// axiosClient.interceptors.response.use(
//   (response) => response.data,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error?.response?.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = await AsyncStorage.getItem(STORAGE_KEY.REFRESH_TOKEN); // Sử dụng await để lấy refresh token
//       if (refreshToken) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
//         return axiosClient(originalRequest);
//       }
//     }
//     if (error?.response?.status === 401) {
//       await AsyncStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN); // Sử dụng await để xoá token
//       // window.location.replace(routesAuth.login); // Xử lý điều hướng
//     }
//     return Promise.reject(error);
//   },
// );


// export { axiosClient };
import axios from 'axios';
// import queryString from 'query-string';
import { configMicro } from './serverMicro';

const axiosClient = axios.create({
  baseURL: 'https://point-api.satek.vn/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config: any) => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };

  config.data;
  return config;
});

axiosClient.interceptors.response.use(
  res => {
    if (res.data && res.status === 200) {
      return res.data;
    }
    throw new Error('Error');
  },
  error => {
    console.log(`Error api ${JSON.stringify(error)}`);
    throw new Error(error.response);
  },
);

export default axiosClient;