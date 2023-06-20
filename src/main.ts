import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Community from "./views/Community.vue";
import Home from "./views/Home.vue";
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
      path: "/docs",
      name: "Docs",
      component: Home,
      beforeEnter: () => window.location.href = "https://docs.cosmo-lang.dev"
    },
    {
      path: "/install",
      name: "Install",
      component: Install
    }
  ]
});

createApp(App)
  .use(router)
  .mount("#app");
