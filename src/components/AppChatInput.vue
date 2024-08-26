<script setup lang="ts">
const { state } = useStore();

const props = defineProps<{
  namespace: string;
  useTools: boolean;
}>();

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

const useChat = async (content: string) => {
  state.current.messages.push({ role: "user", content });
  await q.chat(state.current, handler, props.useTools);
};
</script>
<template>

    <AppInput @send="useChat" />
</template>
