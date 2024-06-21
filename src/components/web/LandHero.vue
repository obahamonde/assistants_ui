<script setup lang="ts">
const props = defineProps<{
  login: () => any;
}>();
</script>
<template>
  <div class="grey-layer"></div>
  <div class="padding-global">
    <div class="container-large">
      <div class="padding-section-large is-home-hero">
        <div class="hero_wrapper">
          <h1 class="is-h1 is-centre">
            Use your skills augmented by AI
            <span class="text-is-gradient">and make it possible!</span>
          </h1>
          <div class="homepage-hero-subtext is-centre top-margin-30">
            A set of AI-driven tools that automate and scale your business,
            enabling you to focus on what really matters:
            <strong>Your Growth</strong>
          </div>
          <div class="button-wrapper top-margin-32">
            <a href="/contact" class="button w-inline-block">
              <div class="button-text">Contact Us</div>
            </a>
            <div id="try-enterpret-btn" class="button no-gradient">
              <div class="button-text" @click="props.login()">
                Take Product Tour ▶
              </div>
            </div>
            <a
              href="https://app.storylane.io/share/sc0am5elax5a"
              target="_blank"
              class="button-wrapper-learn-more hide w-inline-block"
            >
              <div class="learn-more-text hide">Try IndieCloud</div>
              <img
                src="https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6504228dbca838eb08a22f91_Frame%20(2).webp"
                loading="lazy"
                alt=""
                width="16"
                class="image hide"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
