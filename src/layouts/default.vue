<script setup lang='ts'>
const { state } = useStore();
const clipped = ref(true);
</script>
<template>
  <SideBar :namespace="state.user.sub" v-if="state.user" 
  @open="clipped=!clipped"  />
  <main
    class="flex min-h-screen overflow-auto flex-col items-center justify-between"
    :class="clipped ? 'w-full' : 'w-4/5 translate-x-72 transition-transform duration-500 ease-in-out transform z-40'"
  >
    <RouterView />
  </main>
</template>
