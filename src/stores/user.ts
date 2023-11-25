import { defineStore, acceptHMRUpdate } from "pinia";
import type { Thread, Message, Notification, User } from "~/types";

export const useStore = defineStore("state", () => {
  const state = reactive({
    notifications: [] as Notification[],
    user: null as User | null,
    messages: [] as Message[],
    thread: null as Thread | null,
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
