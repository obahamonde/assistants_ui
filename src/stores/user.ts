import { defineStore, acceptHMRUpdate } from "pinia";
import type { Notification, User, Chat, Message } from "~/types";

export const useStore = defineStore("state", () => {
  const state = reactive({
    notifications: [] as Notification[],
    user: null as User | null,
    chats: [] as Chat[],
    current: { messages: [] as Message[], model: "llama3-8b-8192", instruction: "You are a helpful assistant" } as Chat,
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
