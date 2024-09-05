<template>
  <textarea
    v-model="content"
    @keyup.enter="
      $emit('send', content);
      content = '';
    "
    placeholder="Type your message here..."
    class="bg-gray-700 w-full max-w-192 min-w-128 p-2 rounded sh focus:outline-none focus:ring-2 text-white focus:ring-teal focus:border-transparent transition duration-300 ease-in-out transform max-h-48 focus:scale-105 text-white"
  ></textarea>
</template>

<script setup lang="ts">
const content = ref<string>("");
</script>

<style scoped>
@media (min-width: 640px) {
  .max-w-192 {
    max-width: 48rem; /* Adjusts the width for larger screens */
  }
}

@media (max-width: 639px) {
  .min-w-128 {
    min-width: 32rem; /* Adjusts the width for smaller screens */
  }
}

/* Adding smooth animation */
.transition {
  transition: all 0.3s ease-in-out;
}

.transform {
  transform: scale(1);
}

.focus\:scale-105:focus {
  transform: scale(1.05);
}
</style>
