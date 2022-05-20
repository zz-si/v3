import { RouteRecordRaw } from "vue-router";
import home from "./home";
const routes: Array<RouteRecordRaw> = [
  // { path: "/", component: Home },
  // 动态导入
  ...home,
  { path: "/loginInquiry", component: () => import("@/views/LoginInquiry.vue") },
  { path: "/login", component: () => import("@/views/LoginView.vue") },
  { path: "/:pathMatch(.*)", component: () => import("@/views/NotFound.vue") },
];
export default routes;
