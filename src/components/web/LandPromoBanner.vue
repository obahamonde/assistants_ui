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
    <img
      src="https://assets-global.website-files.com/65030bfd09557ada51fe30e2/651d80f74c23a515563e9890_hb-close.svg"
      loading="lazy"
      id="bn-close-btn"
      alt=""
      class="hb-close"
      @click="visible = !visible"
    />
  </div>
</template>
<style scoped></style>
