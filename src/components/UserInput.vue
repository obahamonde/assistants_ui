<script setup lang="ts">
import { User } from "~/types";
const props = defineProps<{
  user: User;
}>();
const { state } = useStore();
</script>
<template>
  <section class="col items-center h-screen w-full animate-fade-in-down">
    <FilesInput v-if="props.user && state.thread" :user="props.user">
      <MessageInput />
    </FilesInput>
    <article class="content-wrapper" v-if="state.thread">
      <ThreadMessages
        v-if="state.thread"
        :thread="state.thread"
        :user="props.user"
        :assistant="state.assistant"
      />
    </article>
    <article class="content-wrapper" v-else>
      <div>
        {{ state.thread ? "" : "Create a thread to start a Chat" }}
      </div>
    </article>
  </section>
</template>
<style scoped>
.content-wrapper {
  height: calc(100vh - 64px);
  overflow-y: auto;
  @apply flex flex-col justify-center items-center w-full p-8;
}
</style>
