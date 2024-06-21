<script setup lang="ts">
import type { User } from "../types";
const props = defineProps<{ user: User }>();
const namespace = computed(() => props.user.sub);
const routes = ref([
  "Chat",
  "Transcribe",
  "Voice",
  "Image",
  "Embeddings",
  "Files",
  "Stores",
  "Tres",
]);
</script>
<template>
  <div class="col center mx-auto gap-2">
    <h1 class="text-title my-8 underline">Not OpenAI</h1>
    <RouterLink
      :to="`/${route.toLowerCase()}/${namespace}`"
      class="text-caption underline-none hover:font-extrabold hover:text-black hover:text-underline text-xl"
      v-for="route in routes"
      >{{ route }}</RouterLink
    >
  </div>
</template>
<style scoped></style>
