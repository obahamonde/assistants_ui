<script setup lang="ts">
import { Message, ThreadMessage } from "~/types";
const { request, response } = useRequest<ThreadMessage>();
const { state } = useStore();
const body = computed<Message>(() => {
  return {
    text: text.value,
    file_ids: state.files.map((f) => f.id),
    thread_id: state.thread ? state.thread.id : "",
  };
});
const addMessage = async (body: Message) => {
  try {
    await request(`/api/threadmessage`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    state.messages.push(response.value as ThreadMessage);
  } catch (e) {
    console.log(e);
  }
};
const text = ref("");
</script>
<template>
  <textarea
    v-model="text"
    class="w-full px-4 py-2 rounded-lg mx-2"
    placeholder="Type a message"
    @keydown.enter.prevent="addMessage(body)"
  />
</template>
