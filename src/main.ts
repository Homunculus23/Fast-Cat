import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";
import { Editor } from "./views/Editor";
import { HomePage } from "./views/HomePage";
import "@svgstore";

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
