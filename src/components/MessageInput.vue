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
  if (!body.assistant_id) useChatbot();
  else {
    try {
      await request(`/api/threadmessage`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      state.messages.unshift(response.value as ThreadMessage);
      await req(
        `/api/run/${body.thread_id}?assistant_id=${body.assistant_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      text.value = "";
      state.run = res.value;
      useRun(res.value.id);
    } catch (e) {
      console.log(e);
    }
  }
};
const useRun = (id: string) => {
  if (!state.thread) return;
  if (!state.run || state.run.id !== id) return;
  const source = new EventSource(
    `/api/run/${state.thread.id}?run_id=${state.run.id}`,
  );
  source.onmessage = (e) => {
    const data = JSON.parse(e.data) as ThreadMessage;
    state.messages.unshift(data);
  };
  source.onerror = (e) => {
    console.log(e);
  };
  source.addEventListener("done", (e) => {
    source.close();
    return;
  });
};

const useChatbot = async () => {
  if (!state.thread) return;
  const source = new EventSource(
    `/api/chat/${state.thread.id}?text=${text.value}`,
  );
  state.messages.unshift({
    content: [
      {
        type: "text",
        // @ts-ignore
        text: {
          value: text.value,
        },
      },
    ],
    role: "user",
  });
  state.messages.unshift({
    content: [
      {
        type: "text",
        // @ts-ignore
        text: {
          value: "",
        },
      },
    ],
    role: "assistant",
  });
  source.onmessage = (e) => {
    const chunk = e.data;
    console.log(chunk);
    // @ts-ignore
    state.messages[0].content[0].text.value += chunk;
  };
  source.addEventListener("done", (e) => {
    source.close();
    return;
  });
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
