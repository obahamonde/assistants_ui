<template>
  <div class="relative">
    <!-- Magnify Icon -->
    <Icon
      icon="mdi:magnify"
      @click="showOverlay = true"
      class="text-4xl cursor-pointer text-gray-500"
    />
    
    <!-- Overlay -->
    <transition name="fade">
      <div
        v-if="showOverlay"
        @click.self="showOverlay = false"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
          <!-- Close Button -->
          <button @click="showOverlay = false" class="absolute top-2 right-2 text-gray-500 text-xl">&times;</button>

          <!-- Text Area -->
          <textarea
            v-model="query"
            @input="fetchResults"
            placeholder="Searach..."
            class="w-full p-2 border bg-gray-500 border-gray-300 rounded-md mb-4"
            rows="4"
          ></textarea>

          <!-- Results -->
          <div v-if="results.length" class="space-y-4">
            <div
              v-for="result in results"
              :key="result.id"
              class="p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div v-html="highlightText(result.text, query)" class="text-lg"></div>
            </div>
          </div>
          <p v-else class="text-gray-500">No results found</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { CosimResult } from '@/types';
const props = defineProps<{
	namespace: string;
}>();
const showOverlay = ref(false);
const query = ref('');
const results = ref<any[]>([]);

const fetchResults = async () => {
  if (!query.value.trim()) {
    results.value = [];
    return;
  }

  const { data } = await useFetch(`https://chat.indiecloud.co/api/search/${props.namespace}?query=${encodeURIComponent(query.value)}`).json<CosimResult[]>();
  if (!data.value) return;
  results.value = data.value.sort((a: CosimResult, b: CosimResult) => b.score - a.score);
};

const highlightText = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span class="text-success">$1</span>');
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>