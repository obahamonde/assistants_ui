<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>
<template>
  <button class="v-btn">
    {{ props.text }}
  </button>
</template>
<style scoped>
.v-btn {
  @apply text-sm px-4 py-2 text-center align-middle text-gray-300 rounded-md cursor-pointer scale;
  @apply bg-primary hover:bg-accent hover:text-white;
}
</style>
