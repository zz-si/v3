export default [
  { path: "/", alias: ["/home"], component: () => import("@/views/HomeView.vue") },
  { path: "/user", meta: { verify: true }, component: () => import("@/views/UserView.vue") },
];
