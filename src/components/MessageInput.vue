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
  if (!body.text) return;
  if (!body.assistant_id) useChatbot(); else {
  
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
    useRun(res.value.id);
  } catch (e) {
    console.log(e);
  }
};
};
const useRun = (id: string) => {
  if (!state.thread) return;
  if (!state.run || state.run.id !== id) return;
 useEvent<ThreadMessage>(`/api/events/${state.thread.id}?run_id=${id}`,(data:ThreadMessage) => {
    state.messages.push(data)
  });
};

const useChatbot = async () => {
  if (!state.thread) return;
  const source = new EventSource(`/api/chat/${state.thread.id}?text=${text.value}`);
    state.messages.push({
      content: [
        {
          type: "text",
          text: {
            value: text.value,
          },
        },
      ],
      role: "user",
    });
    state.messages.push({
      content: [
        {
          type: "text",
          text: {
            value: "",
          },
        },
      ],
      role: "assistant",
    });


  source.onmessage = (e) => {
    const chunk = e.data
    console.log(chunk);
    state.messages[state.messages.length - 1].content[0].text.value += chunk
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
