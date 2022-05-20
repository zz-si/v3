import request from "@/tools/request";
export default {
  // 文件名可以对应需要请求页面的文件名
  home: (params: object) => request.get("/topics", params),
  homeUser: (params: object) => request.get("/", params),
};
