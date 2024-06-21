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
  content.value = "";
  await q.chat(state.current, handler);
};
</script>
<template>
  <div class="col center p-8 overflow-y-auto">
    <textarea
      v-model="content"
      @keyup.enter="useChat"
      placeholder="Type your message here..."
      class="bg-gray-500 w-full max-w-192 min-w-128 p-2 rounded sh focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
    ></textarea>
    <div>
      <p v-for="message in state.current.messages">
      <div v-if="message.role === 'assistant' || message.role === 'user'">
        <img
          :src="message.role === 'user' ? state.user!.picture : `/svg/${state.current.model.toLowerCase()}.svg`"
          class="x2 rf sh"
          :class="
            message.role === 'user' ? 'float-right m-1' : 'float-left m-1'
          "
        />
        <div>
        <AppAudio :content="message.content" />
        <AppTextBlock :content="message.content" />
        </div>
      </div>
      </p>
    </div>
  </div>
</template>
<style scoped>
textarea {
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
}
</style>
