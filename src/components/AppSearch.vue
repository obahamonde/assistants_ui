<template>
  <div class="relative">
    <Icon icon="mdi:magnify" @click="showOverlay = true" class="x2 scale cp" />
    <transition name="fade">
      <div
        v-if="showOverlay"
        @click.self="showOverlay = false"
        class="fixed inset-0 flex items-center  justify-center overflow-y-auto bg-black bg-opacity-50 z-50 "
      >
        <div
          class="rounded-lg shadow-lg max-w-2xl w-full relative backdrop-blur-sm sh p-4"
        >
          <button
            @click="showOverlay = false"
            class="absolute top-2 right-2 text-gray-500 text-xl"
          >
            &times;
          </button>
          <input
            type="text"
            v-model="query"
            @input="fetchResults(topK)"
            placeholder="Search..."
            class="w-full p-2 border bg-gray-500  rounded-md mb-4 z-50  fixed top-0 mx-auto"
            rows="4"
          /><input type="range" v-model="topK" class="z-50 fixed top-10 mx-auto" />
          <div v-if="results.length" class="gap-4 col center -top-40vh fixed">
            <div
              v-for="result in results"
              :key="result.id"
              class="p-4 my-2 bg-gray-300 w-full rounded-lg shadow-md text-gray-700"
            >
              <div v-html="result.content" class="text-xs">
          
              </div>    <p class="bg-accent text-white rounded-full text-xs m-2 px-2 py-1 w-fit">Score: {{result.score.toFixed(2)}}</p>
            </div>
          </div>
          <p v-else class="text-black z-50 top-12 fixed">
        <span>You will search for the top </span>
        <span>{{topK}} </span>
        <span> {{topK > 1 ? ' results' : ' result'}}</span>
      </p>
    </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { CosimResult } from "@/types";
const props = defineProps<{
  namespace: string;
}>();
const topK = ref(5);
const showOverlay = ref(false);
const query = ref("");
const results = ref<CosimResult[]>([]);

const fetchResults = async (topK:number) => {
  if (!query.value.trim()) {
    results.value = [];
    return;
  }
  
  const { data } = await useFetch(
    `https://chat.indiecloud.co/api/search/${props.namespace}?query=${encodeURIComponent(query.value)}&topK=${encodeURIComponent(topK)}`
  ).json<CosimResult[]>();
  results.value = data.value as CosimResult[];
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
