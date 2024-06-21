<script setup lang='ts'>
const { state } = useStore();
</script>
<template>
  <SideBar :namespace="state.user.sub" v-if="state.user" />
  <main
    class="flex min-h-screen overflow-auto flex-col items-center justify-between"
  >
    <RouterView />
  </main>
</template>
