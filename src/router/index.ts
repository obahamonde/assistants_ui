import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index.vue";
import Chat from "@/pages/Chat.vue";

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "chat",
        component: Chat,
      },
      // Add more child routes as needed
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
