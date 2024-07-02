<script setup lang="ts">
const content = ref<string>("");
</script>
<template>
  <textarea
    v-model="content"
    @keyup.enter="
      $emit('send', content);
      content = '';
    "
    placeholder="Type your message here..."
    class="bg-gray-700 w-full max-w-192 min-w-128 p-2 rounded sh focus:outline-none focus:ring-2 text-white focus:ring-teal focus:border-transparent"
  ></textarea>
</template>
