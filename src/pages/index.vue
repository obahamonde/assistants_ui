<script setup lang="ts">
useTitle("Home");
useFavicon("/favicon.png");
</script>

<template>
  <Auth>
    <template #default="{ user, logout }">
      <section class="col mt-100 center max-h-100vh h-full">
        <AppView :user="user" v-if="user" />
        <RouterLink to="/" class="btn" v-if="user" @click="logout">
          Logout
        </RouterLink>
        <AppView :user="user" />
      </section>
    </template>
    <template #landing="{ login }">
      <section class="h-full w-full">
        <PageLanding :login="login" />
      </section>
    </template>
  </Auth>
</template>
