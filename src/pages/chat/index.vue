<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
useTitle("Home");
useFavicon("/favicon.png");
const { logout } = useAuth0();
const { state } = useStore()


</script>

<template>
  <section class="col center overflow-auto">
<Auth>
<template v-if="state.user">
<AppView :user="state.user" v-if="state.user" :logout="logout" />
        <Icon icon="mdi:loading" class="animate-spin" v-else />
      </template>
      <template #landing="{ login }" >
        <section class="h-full w-full">
          <PageLanding :login="login" />
        </section>
      </template>
    </Auth>
  </section>
</template>
