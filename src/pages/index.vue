<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
const { isAuthenticated, loginWithRedirect } = useAuth0();
useTitle("Home");
useFavicon("/favicon.png");
</script>

<template>
  <section class="col center overflow-auto">
    <Auth>
      <template #default="{ user }" v-if="isAuthenticated">
        <AppView :user="user" />
      </template>
      <template #landing="{ login }" v-else>
        <section class="h-full w-full min-h-100vh min-w-100vw">
          <LandLanding :login="login" />
        </section>
      </template>
    </Auth>
  </section>
</template>
