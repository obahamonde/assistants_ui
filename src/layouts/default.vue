<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { state } = useStore();
const { logout } = useAuth0();
</script>
<template>
  <div>
    <AppView :user="state.user" />
  </div>
  <main class="flex row center w-screen min-h-screen h-full overflow-auto">

    <SideBar :namespace="state.user.sub!" :logout="logout" v-if="state.user" />
    <RouterView />
    <Artifacts :namespace="state.user.sub!" v-if="state.user" />
  </main>
</template>
