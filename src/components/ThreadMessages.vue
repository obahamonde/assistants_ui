<script setup lang="ts">
import type { Assistant, User, Thread } from '~/types';
const { state } = useStore();
const props = defineProps<{
  thread: Thread;
  user: User;
  assistant: Assistant | null;
}>();
</script>
<template>
  
  <section class="col items-center h-screen w-full max-w-256 animate-fade-in">
    <article class="content-wrapper">
      <div v-for="message in state.messages" class="min-h-32 min-w-128">
      <div v-for="content in message.content" v-if="props.assistant">
        <ChatMessage
        v-if="content.type == 'text'"
          :image="message.role === 'assistant' ? props.assistant.avatar : props.user.picture!"
          :content="content.text.value"
          :reverse="message.role === 'assistant' ? true : false"
        />
        </div>
        <div v-for="content in message.content" v-if="!props.assistant">
        <ChatMessage
        v-if="content.type == 'text'"
          :image="message.role === 'assistant' ? '/chatbot.svg' : props.user.picture!"
          :content="content.text.value"
          :reverse="message.role === 'assistant' ? true : false"
        />
        </div>
      </div>
    </article>
      <div class="text-title">
        {{ state.thread ? "" : "Create a thread to start a Chat" }}
      </div>  
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
