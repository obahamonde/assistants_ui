<script setup lang="ts">
const props = defineProps({
  login: Function as PropType<() => void>,
});
</script>
<template>
  <div class="container-large is-nav">
    <a
      href="/"
      aria-current="page"
      class="nav_brand-logo-link w-nav-brand w--current"
      ><img src="/favicon.svg" loading="lazy" width="181" alt="IndieCloud Logo"
    /></a>
    <div class="nav-right-wrapper">
      <button @click="props.login" class="button w-inline-block">
        <div class="button-text is-nav">Get Started</div>
      </button>
    </div>
  </div>
</template>
