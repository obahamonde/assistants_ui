<script setup lang="ts">
useTitle("Home");
useFavicon("/favicon.png");
const { state } = useStore();
</script>
<template>
  <div
    v-if="state.user"
    class="row w-full h-full h-screen overflow-auto min-w-100vw"
  >
    <Threads :user="state.user" />
    <UserInput :user="state.user" />
    <Assistants />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
