<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();
useTitle("Home");
useFavicon("/favicon.png");
</script>

<template>
  <section class="col center overflow-auto">
    <Auth>
      <template #default="{ user }" v-if="isAuthenticated">
        
        <AppView :user="user" v-if="user" />
        <Icon icon="mdi:loading" class="animate-spin" v-else />
      </template>
      <template #landing="{ login }" v-else>
        <section class="h-full w-full">
          <PageLanding :login="login" />
        </section>
      </template>
    </Auth>
  </section>
</template>