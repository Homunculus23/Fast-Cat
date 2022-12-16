import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";
import { Editor } from "./views/editor";
import { HomePage } from "./views/homePage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/editor", component: Editor },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
