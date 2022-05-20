import qs from "qs";
import axios from "./axios";

/**
 * 封装请求方式
 */
const request = {
  /**
   * @name: 封装axios get方法
   * @desc: 描述
   * @author: camellia
   * @email: guanchao_gc@qq.com
   * @date: 2020-12-21
   * @param url 请求连接
   * @param params 请求参数
   * @param callback 回调方法
   */
  get(url: string, params: any, callback?: Function): Promise<object> {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
        })
        .then((res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * @name: 封装axios post方法
   * @desc: 描述
   * @author: camellia
   * @email: guanchao_gc@qq.com
   * @date: 2020-12-21
   * @param url 请求连接
   * @param params 请求参数
   * @param callback 回调方法
   */
  post(url: string, params: any, callback?: Function) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(params))
        .then((res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * @name: put请求封装
   * @author: camellia
   * @email: guanchao_gc@qq.com
   * @date: 2021-03-01
   * @param url 请求连接
   * @param params 请求参数
   * @param callback 回调方法
   */
  put(url: string, params: any, callback?: Function) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, params)
        .then((res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * @name: 请求失败后的错误统一处理
   * @author: camellia
   * @email: guanchao_gc@qq.com
   * @date: 2021-03-08
   * @param {Number} status 请求失败的状态码
   */
  errorHandle(status: number) {
    // 状态码判断
    switch (status) {
      case 0:
        console.log("访问的主机地址不存在");
        break;
      case 400:
        console.log("参数错误");
        break;
      // 401: 未登录状态，跳转登录页
      case 401:
        console.log("未登录");

        break;
      // 403 token过期
      // 清除token并跳转登录页
      case 403:
        console.log("登录过期");
        break;
      // 404请求不存在
      case 404:
        console.log("访问的地址不存在");
        break;
      case 408:
        console.log("请求超时(408)");
        break;
      case 500:
        console.log("服务器错误(500)");
        break;
      case 501:
        console.log("服务未实现(501)");
        break;
      case 502:
        console.log("网络错误(502)");
        break;
      case 503:
        console.log("服务不可用(503)");
        break;
      case 504:
        console.log("网络超时(504)");
        break;
      case 505:
        console.log("HTTP版本不受支持(505)");
        break;
      default:
        console.log(status);
    }
  },
};
export default request;
