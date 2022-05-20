// import request from "./request";
// const productionURl = "";
// const developmentURl = "";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
axios.defaults.timeout = 10_000;
axios.defaults.baseURL = "/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// interface ResponseData<T = any> {
//   success: boolean;
//   data: T;
// }
// interface ResponseError {
//   code: string;
//   config: object;
//   message: string;
//   name: string;
//   request: object;
//   response: object;
// }
// axios 请求头
// axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers["token"] = localStorage.getItem("token") || "";
axios.defaults.headers.post["Content-Type"] = "application/json";
// 请求拦截
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 可在这里做一些数据的校验。
    // session的校验等。
    return config;
  },
  (error: AxiosError) => {
    return error;
  }
);
// 响应拦截
axios.interceptors.response.use(
  (result: AxiosResponse) => {
    return Promise.resolve(result);
  },
  (err: AxiosError) => {
    console.log("错误信息", err);
    // request.errorHandle(err.response.status);
    return Promise.reject(err);
  }
);

export default axios;
