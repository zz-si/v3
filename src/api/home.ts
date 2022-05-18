import request from "@/tools/request";
export default {
  // 文件名可以对应需要请求页面的文件名
  home: () => request.get("/", { page: 1, limit: 20 }),
  homeUser: () => request.get("/", { page: 1, limit: 20 }),
};
