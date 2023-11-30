<script setup lang="ts">
import { Message, Run, ThreadMessage } from "~/types";
const { request, response } = useRequest<ThreadMessage>();
const { request:req, response:res } = useRequest<Run>()
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

const text = ref("");
const handleMessage = async (body: Message) => {
  if (!body.text) return;
  if (!body.thread_id) return;
  if (!body.assistant_id) return;
  await addMessage(body);
  await handleRunner();
  text.value = "";
};
const handleRunner = async ()=>{
  const { run, thread, assistant } = state;
  console.log(run)
  if (!thread) return;
  if (!run && !assistant) return;
  if (!run && assistant) {
    const url = `/api/run/${thread.id}?assistant_id=${assistant.id}`;
    await req(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    state.run = res.value
  }
  else if (run && assistant) {
    if (!run) return;
    if (run.status in ["cancelling", "cancelled", "failed", "completed","expired"]) {
       const url = `/api/run/${thread.id}?assistant_id=${assistant.id}`;
    await req(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    state.run = res.value
  }
  else {
    }
    const url = `/api/run/${thread.id}?run_id=${run.id}`;
    await req(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    state.run = res.value
  }
}
</script>
<template>
  <textarea
    v-model="text"
    class="w-full px-4 py-2 rounded-lg mx-2"
    placeholder="Type a message"
    @keydown.enter.prevent="handleMessage(body)"
  />
 
</template>
