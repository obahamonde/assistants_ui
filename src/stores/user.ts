import { defineStore, acceptHMRUpdate } from "pinia";
import type { Notification, Chat, Message } from "~/types";
import type { User } from "@auth0/auth0-vue";

export const useStore = defineStore("state", () => {
  const state = reactive({
    notifications: [] as Notification[],
    user: {} as User,
    chats: [] as Chat[],
    current: {
      messages: [] as Message[],
      model: "llama3-8b-8192",
      instruction: "You are a helpful assistant",
    } as Chat,
    queue: {
      messages: [] as Message[],
      model: "llama3-8b-8192",
      instruction: "You are a tool orchestrator",
    } as Chat,
  });

  const setState = (newState: any) => {
    Object.assign(state, newState);
  };

  const notify = (message: string, status: string) => {
    state.notifications.push({ message, status });
  };

  return {
    state,
    notify,
    setState,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
