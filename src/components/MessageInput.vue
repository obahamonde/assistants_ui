<script setup lang="ts">
import { Message, Run, ThreadMessage } from "~/types";
const { request, response } = useRequest<ThreadMessage>();
const { request:req, response:res } = useRequest<Run>()
const { state } = useStore();
const { run, thread, assistant } = toRefs(state);
const text = ref("");
const runnerUrl = computed(() => {
  if (!thread.value) return null;
  let url = `/api/run/${thread.value.id}`;
  if (run.value && assistant.value) {
    url += `?run_id=${run.value.id}`;
  } else if (!run.value && assistant.value) {
    url += `?assistant_id=${assistant.value.id}`;
  }
  return url;
});
const body = computed<Message>(() => {
  return {
    text: text.value,
    file_ids: state.files.map((f) => f.id),
    thread_id: state.thread ? state.thread.id : "",
    assistant_id: state.assistant ? state.assistant.id : "",
  };
});
watchEffect(async()=>{
  (!run.value || run.value.status in ["cancelling", "cancelled", "failed","completed","expired"]) ? await handleRunner() : null;
})
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

const handleMessage = async (body: Message) => {
  if (!body.text) return;
  if (!body.thread_id) return;
  if (!body.assistant_id) return;
  await addMessage(body);
  await handleRunner();
  text.value = "";
};
const handleRunner = async ()=>{
  const url = runnerUrl.value;
  if (!url) return;
  await req(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    state.run = res.value as Run;
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
