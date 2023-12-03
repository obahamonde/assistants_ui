<script setup lang="ts">
useTitle("Home");
useFavicon("/favicon.png");
</script>
<template>
  <section class="col center h-screen">
    <Auth>
      <template #default="{ user }">
        <div class="row w-full h-screen overflow-auto min-w-100vw">
          <Threads :user="user" />

          <UserInput :user="user" />

          <Assistants :user="user" />
        </div>
      </template>
      <template #landing="{ login }">
        <img src="/chatbot.svg" class="w-64" />
        <section class="text-2xl font-script font-bold mt-8 text-gray-700">
          Intelligence Artificielle Assistant À la carte
        </section>
        <GradientButton @click="login" class="mt-8" text="Get Started" />
      </template>
    </Auth>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
