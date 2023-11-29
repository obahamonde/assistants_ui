<script setup lang="ts">
import { Message, ThreadMessage } from "~/types";
const { request, response } = useRequest<ThreadMessage>();
const { state } = useStore();
const body = computed<Message>(() => {
  return {
    text: text.value,
    file_ids: state.files.map((f) => f.id),
    thread_id: state.thread ? state.thread.id : "",
    assistant_id: state.assistant ? state.assistant.id : "",
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
const runMessage = (body:Message)=>{
  if (!body.thread_id) return;
  if (!body.assistant_id) return;
  const { data, err, close, status } = usePubSub<ThreadMessage>(`/api/events/${body.thread_id}?assistant_id=${body.assistant_id}`);
  watch(data, (newVal, oldVal) => {
    if (newVal !== oldVal && newVal) {
      state.messages.push(newVal as ThreadMessage);
    }
  });
  watch(err, (newVal, oldVal) => {
    if (newVal !== oldVal && newVal) {
      console.log(newVal);
    }
  });
  watch(status, (newVal, oldVal) => {
    if (newVal === "CLOSED") {
      return;
    }
  onUnmounted(() => {
    close();
  });
  });
}
const text = ref("");
const handleMessage = async (body: Message) => {
  if (!body.text) return;
  body.thread_id && body.assistant_id ? runMessage(body) : await addMessage(body);
  text.value = "";
};



</script>
<template>
  <textarea
    v-model="text"
    class="w-full px-4 py-2 rounded-lg mx-2"
    placeholder="Type a message"
    @keydown.enter.prevent="handleMessage(body)"
  />
</template>
