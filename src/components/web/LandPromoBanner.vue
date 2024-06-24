<script setup lang="ts">
const props = defineProps<{
  login: () => any;
}>();
const visible = ref(true);
</script>
<template>
  <div id="head-banner" class="header-banner top-0 fixed w-full" v-if="visible">
    <div class="text-block text-accent">
      Join now and get $50 extra free credits
      <button @click="props.login()" class="snackbar-link rounded-lg">
        SignUp
      </button>
    </div>
    <Icon icon="mdi-close" @click="visible = !visible" class="btn-icon" />
  </div>
</template>
<style scoped></style>
