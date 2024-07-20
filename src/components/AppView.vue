<script setup lang="ts">
import type { User } from "../types";
const props = defineProps<{ user: User }>();
const routes = ref(["Chat"]);
</script>
<template>
  <div>
    <RouterLink
      :to="`/${route.toLowerCase()}/${props.user.sub}`"
      class="text-secondary font-sans underline-none hover:font-extrabold hover:text-gray-500 hover:text-underline text-xl"
      v-for="route in routes"
      >{{ route }}</RouterLink
    >
  </div>
</template>
