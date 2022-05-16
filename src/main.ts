import "./styles/index.scss";
import "./styles/a.css";
import { plus_one } from "./tools/add";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router/index";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
// myPromise();
plus_one(1);
