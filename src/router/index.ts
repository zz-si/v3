import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  // { path: "/", component: Home },
  // 动态导入
  { path: "/", alias: ["/home"], component: () => import("@/views/Home.vue") },
  { path: "/login", component: () => import("@/views/Login.vue") },
  { path: "/:pathMatch(.*)", component: () => import("@/views/NotFound.vue") },
];
export default routes;
