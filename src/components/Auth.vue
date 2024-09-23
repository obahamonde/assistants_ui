<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { state } = useStore();
const { isAuthenticated, logout, getAccessTokenSilently, loginWithRedirect } = useAuth0();

const login = async () => {
  if (!isAuthenticated.value) return;
  const token = await getAccessTokenSilently();
  const AUTH0_DOMAIN = "dev-tvhqmk7a.us.auth0.com";
  const response = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
  
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
  const data = await response.json();
  console.log(data);
state.user = data;
};

onMounted(async () => {
  await login();
});

</script>
<template>
  <Notifier />
  <div v-if="isAuthenticated && state.user">
    <slot :user="state.user" :logout="logout" />
  </div>
  <div v-else>
    <div class="container">
      <slot name="landing" :login="loginWithRedirect" />
    </div>
  </div>
</template>
