<script setup lang="ts">
useTitle("Home");
useFavicon("/favicon.png");
</script>

<template>
  <section class="col center overflow-auto">
    <Auth>
      <template #default="{ user }">
        <AppView :user="user" v-if="user" />
      </template>
      <template #landing="{ login }">
        <section class="h-full w-full">
          <PageLanding :login="login" />
        </section>
      </template>
    </Auth>
  </section>
</template>
