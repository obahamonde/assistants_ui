<script setup lang="ts">
</script>

<template>
<Auth v-slot="{ user }">
<SideBar />
 <main class="flex min-h-screen overflow-auto flex-col items-center justify-between">
    <RouterView />
   </main>
</Auth>
</template>
