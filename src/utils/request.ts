import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

// 创建 axios 实例
const service = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  baseURL: "http://localhost:8802/",
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const userStore = useUserStoreHook();
    // if (userStore.token) {
    //   config.headers.Authorization = userStore.token;
    // }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data;
    console.log(response.data);
    if (code === 200) {
      return response.data;
    }
    // 响应数据为二进制流处理(Excel导出)
    if (response.data instanceof ArrayBuffer) {
      return response;
    }

    return Promise.reject(new Error(msg || "Error"));
  },
  (error: any) => {
    if (error.response.data) {
      const { code, msg } = error.response.data;
      if (code === "A0230") {
        console.log(msg);
      }
      // token 过期,重新登录
    }
    return Promise.reject(error.message);
  }
);

// 导出 axios 实例
export default service;
