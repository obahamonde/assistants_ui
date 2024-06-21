<script setup lang="ts">
useTitle("Home");
useFavicon("/favicon.png");
</script>
<template>
  <RouterView />
</template>
<style>
#app,
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
