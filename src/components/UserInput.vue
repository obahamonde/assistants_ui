<script setup lang="ts">
import { User } from "~/types";
const props = defineProps<{
  user: User;
}>();
const { state } = useStore();
const { assistant, thread } = state;
</script>
<template>
  <section class="col items-center h-screen w-full">
    <FilesInput v-if="props.user" :user="props.user">
      <MessageInput />
    </FilesInput>
    <article class="content-wrapper" v-if="thread && assistant">
      <slot :thread="thread" :assistant="assistant" />
    </article>
    <article class="content-wrapper" v-if="!thread && assistant">
      Choose a thread to get started
    </article>
    <article class="content-wrapper" v-if="!thread && !assistant">
      Choose a thread and assistant to get started
    </article>
    <article class="content-wrapper" v-if="thread && !assistant">
      Choose an assistant to get started
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
