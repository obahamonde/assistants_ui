<script setup lang="ts">
useTitle("Home");
useFavicon("/favicon.png");
</script>
<template>
  <Auth v-slot="{ user }">
    <RouterView :user="user" />
  </Auth>
</template>
<style>
#app,
body,
html {
  height: screen;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
