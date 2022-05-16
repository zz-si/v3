import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  // { path: "/", component: Home },
  // 动态导入
  { path: "/H", component: () => import("@/views/Home.vue") },
];
export default routes;
