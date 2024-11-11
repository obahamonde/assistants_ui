<script setup lang="ts">
useTitle("Home");
useFavicon("/favicon.png");
</script>

<template>
  <Auth>
    <template #default="{ user, logout }">
      <section class="col mt-100 center max-h-100vh h-full">
        <AppView :user="user" v-if="user" :logout="logout" />
        <RouterLink to="/" v-if="user" @click="logout"
        class="
        mx-auto px-4 py-2 font-bold text-xl mt-8 drop-shadow-2xl text-white bg-red-500 rounded-lg sh
        opacity-0 hover:opacity-100 transition-opacity duration-300
        "
        >
          Logout
        </RouterLink>
        <AppView :user="user" :logout="logout" v-else />
      </section>
    </template>
    <template #landing="{ login }">
      <section class="h-full w-full">
        <PageLanding :login="login" />
      </section>
    </template>
  </Auth>
</template>
