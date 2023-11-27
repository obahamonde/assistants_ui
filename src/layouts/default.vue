<script setup lang="ts"></script>

<template>
  <Auth v-slot="{ user }">
    <main
      class="flex min-h-screen overflow-auto flex-col items-center justify-between"
    >
      <RouterView :user="user" />
    </main>
  </Auth>
</template>
