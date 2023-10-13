import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Community from "./views/Community.vue";
import Install from "./views/Install.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/community",
      name: "Community",
      component: Community
    },
    {
      path: "/install",
      name: "Install",
      component: Install
    },
    {
      path: "/docs",
      name: "Docs",
      component: Home,
      beforeEnter: () => window.location.href = "https://docs.p-lang.xyz"
    },
    {
      path: "/api",
      name: "API",
      component: Home,
      beforeEnter: () => window.location.href = "https://api.p-lang.xyz"
    }
  ]
});

createApp(App)
  .use(router)
  .mount("#app");
