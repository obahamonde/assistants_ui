<script setup lang="ts">
const props = defineProps<{ namespace: string }>();
const content = ref<string>("");
const q = new QuipuBase("chat", props.namespace);
const { state } = useStore();
const handler = (data: string) => {
  if (!state.current) return;
  if (
    state.current.messages[state.current.messages.length - 1].role === "user"
  ) {
    state.current.messages.push({ role: "assistant", content: data });
  } else {
    state.current.messages[state.current.messages.length - 1].content += data;
  }
};
const useChat = async () => {
  state.current.messages.push({ role: "user", content: content.value });
  await q.chat(state.current, handler);
};
</script>
<template>
  <div>
    <textarea v-model="content" @keyup.enter="useChat"></textarea>
    <div>
      <p v-for="message in state.current.messages">
        {{ message.role }}: {{ message.content }}
      </p>
    </div>
  </div>
</template>
