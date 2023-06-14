import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./Home.vue";
import Community from "./Community.vue";

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
    }
  ]
});

createApp(App)
  .use(router)
  .mount("#app");
