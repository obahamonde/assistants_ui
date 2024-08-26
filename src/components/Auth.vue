<script setup lang="ts">
import { useAuth0, User } from "@auth0/auth0-vue";

const { state } = useStore();
const {
  isAuthenticated,
  logout,
  user,
  loginWithRedirect,
} = useAuth0();
const router = useRouter();

onMounted(async () => {
  authorize();
});

const authorize = () => {
  watch(user, (user) => {
    if (user) {
      state.user = user;
    }
  });
}

watch(isAuthenticated, async (isAuthenticated) => {
  if (isAuthenticated) {
     authorize()
  }
})

const login = async () => {
  await loginWithRedirect()
  authorize()
  router.push("/chat")
}
</script>
<template>
  <Notifier />
  <div v-if="isAuthenticated">
    <slot :user="state.user" :logout="logout" />
  </div>
  <div v-else>
    <div class="container">
      <slot name="landing" :login="login" />
    </div>
  </div>
</template>
