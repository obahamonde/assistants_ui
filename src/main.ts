import { createAuth0 } from "@auth0/auth0-vue";
import { Icon } from "@iconify/vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { setupLayouts } from "virtual:generated-layouts";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import generatedRoutes from "~pages";
import App from "./App.vue";

import "uno.css";
import "./styles/main.scss";

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App)
app
  .use(pinia)
  .component("Icon", Icon)
  .use(
    createAuth0({
      domain: "dev-tvhqmk7a.us.auth0.com",
      clientId: "53p0EBRRWxSYA3mSywbxhEeIlIexYWbs",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  )
  .use(router)

app.mount("#app");
