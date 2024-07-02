<script setup lang="ts">
const { state } = useStore();
</script>
<template>
  <main class="flex row center w-screen min-h-screen h-full overflow-auto">
    <SideBar :namespace="state.user.sub" v-if="state.user" />
    <RouterView />
    <Artifacts :namespace="state.user.sub" v-if="state.user" />
  </main>
</template>
