<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { state } = useStore();
const {
  isAuthenticated,
  logout,
  getAccessTokenSilently,
  user,
  loginWithRedirect,
} = useAuth0();

onMounted(async () => {
  await authorize();
});

const authorize = async () => {
  if (!isAuthenticated.value) return;
  const token = await getAccessTokenSilently();
  const res = await fetch("https://chat.indiecloud.co/api/auth", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  state.user = data;
  state.notifications.push({
    message: "Welcome " + user.value!.name,
    status: "success",
  });
  return data;
};

watch(isAuthenticated, async (isAuthenticated) => {
  if (isAuthenticated) {
    state.user = await authorize();
  }
});
const login = () =>{
    if (!isAuthenticated.value && state.user) {
    loginWithRedirect();
}
}
</script>
<template>
  <Notifier />
  <div v-if="isAuthenticated && state.user">
    <slot :user="state.user" :logout="logout" />
  </div>
  <div v-else>
    <div class="container">
      <slot name="landing" :login="login" />
    </div>
  </div>
</template>
