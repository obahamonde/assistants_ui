<script setup lang="ts">
import { Message, ThreadMessage, Run } from "~/types";
const { request, response } = useRequest<ThreadMessage>();
const { request: req, response: res } = useRequest<Run>();
const { state } = useStore();
const text = ref("");
const body = computed<Message>(() => {
  return {
    text: text.value,
    file_ids: state.files.map((f) => f.id),
    thread_id: state.thread ? state.thread.id : "",
    assistant_id: state.assistant ? state.assistant.id : "",
  };
});

const submitAndRun = async (body: Message) => {
  if (!body.thread_id) return;
  if (!body.assistant_id) return;
  if (!body.text) return;
  try {
  
    await request(`/api/threadmessage`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    state.messages.push(response.value as ThreadMessage);
    await req(`/api/run/${body.thread_id}?assistant_id=${body.assistant_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
    text.value = "";
    state.run = res.value
    useServerSentEvents(res.value.id);
  } catch (e) {
    console.log(e);
  }
};

const useServerSentEvents = (id: string) => {
  if (!state.thread) return;
  if (!state.run || state.run.id !== id) return;
  const source = new EventSource(`/api/events/${state.thread.id}?run_id=${id}`);
  source.onmessage = (e) => {
    const data = JSON.parse(e.data);
    console.log(data);
      state.messages.push(data)
  };
  source.addEventListener("done", (e) => {
    source.close()
    return
  })
  source.onerror = (e) => {
    console.log(e);
  };
};

</script>
<template>
  <textarea
    v-model="text"
    class="w-full px-4 py-2 rounded-lg mx-2"
    placeholder="Type a message"
    @keydown.enter.prevent="submitAndRun(body)"
  />

</template>
