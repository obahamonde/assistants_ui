import { defineStore, acceptHMRUpdate } from "pinia";
import type { Thread, ThreadMessage, Notification, User, Assistant } from "~/types";

export const useStore = defineStore("state", () => {
  const state = reactive({
    notifications: [] as Notification[],
    user: null as User | null,
    messages: [] as ThreadMessage[],
    thread: null as Thread | null,
    assistant: null as Assistant | null,
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
