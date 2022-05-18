// code：-200为登录失效状态
// code：-100为接口发生错误状态
// code >0 接口返回成功值
// code <-1 接口返回失败值
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
axios.defaults.timeout = 10_000;
axios.defaults.baseURL = "";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
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
    // ===========================================================
    // 返回方式一
    console.log(result);
    if (result.status === 200) {
      if (result.data && result.data.code > 0) {
        return Promise.resolve(result);
      } else {
        alert(result.data.msg || "操作失败");
        return Promise.reject(result);
      }
    } else {
      alert("网络异常");
      return Promise.reject(result);
    }
  },
  (err: AxiosError) => {
    // 接口错误
    // 返回数据前做了什么
    return Promise.reject(err);
  }
);
