<script setup lang="ts">
interface Quote {
  quote: string;
  strong: string;
  button: string;
}

const props = defineProps<Quote>();
</script>
<template>
  <div class="cta-card is-centre">
    <div class="cta-card-left"></div>
    <div class="cta-card-right">
      <div class="blue-text">The Indie Experience</div>
      <div class="white-text-for-cta-card top-margin-10">
        {{ props.quote }}<strong>{{ props.strong }}</strong>
      </div>
      <a
        href="/cta"
        class="button-wrapper-learn-more is-blue top-margin-10 w-inline-block"
      >
        <div class="get-started-text">{{ props.button }}</div>
        <img
          src="https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6505a300ef3d3e0c85905059_Group%201801758.webp"
          loading="lazy"
          alt=""
          width="16"
          class="image"
        />
      </a>
    </div>
  </div>
</template>
<style scoped></style>
