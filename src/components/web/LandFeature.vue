<template>
  <div class="features-3c-wrapper top-margin-60">
    <div
      v-for="feature in features"
      :key="feature.title"
      class="features-2-card-wrapper"
    >
      <div class="gradient-for-features"></div>
      <div class="features-2-card-main is-home col center">
        <Icon :icon="feature.imgSrc" :width="feature.imgWidth" />
        <div class="features-2-card-title top-margin-20">
          {{ feature.title }}
        </div>
        <div class="text-medium-16 top-margin-10">
          {{ feature.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const features = ref([
  {
    imgSrc:
      "mdi-database",
    imgWidth: 50,
    title: "Source of truth",
    description:
      "Unify all data sources in a globally distributed database to provide seamless experiences to your customers.",
  },
  {
    imgSrc:
      "mdi-database-search",
    imgWidth: 50,
    title: "Semantic search",
    description:
      "Traverse your documents with ease to get accurate contextual information.",
  },
  {
    imgSrc:
      "mdi-shield",
    imgWidth: 40,
    title: "Authentication",
    description:
      "Get secure access to your data with our fine-grained access control mechanisms. Guarantee data privacy and security.",
  },
  {
    imgSrc:
      "mdi-chart-timeline-variant",
    imgWidth: 50,
    title: "Data Visualization",
    description:
      "Get visualizations and insights from your data sources to improve operational efficiency and customer satisfaction.",
  },
  {
    imgSrc:
      "mdi-chat-question",
    imgWidth: 50,
    title: "Q&A Chatbots",
    description:
      "Get an agentic conversational interface to your information to provide instant answers and customized recommendations.",
  },
  {
    imgSrc:
      "mdi-robot",
    imgWidth: 50,
    title: "AI/ML",
    description:
      "Leverage AI/ML task based models to enrich your experience and breakthrough within your industry.",
  }
]);
</script>
