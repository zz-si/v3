import "./styles/index.scss";
import { plus_one } from "./tools/add";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router/index";
import "element-plus/theme-chalk/dark/css-vars.css";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from) => {
  console.log(to, from);
  if (to.meta.verify) {
    if (!sessionStorage.user) {
      // 先提示
      router.push({
        path: "/loginInquiry",
      });
    }
  }
  // ...
  // explicitly return false to cancel the navigation
});
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
// myPromise();
plus_one(1);
