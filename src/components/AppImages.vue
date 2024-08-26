<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { OpenAI } from 'openai'

const prompt = ref('')
const size = ref<'256x256'|'512x512'|'1024x1024'|'1024x1792'|'1792x1024'>('1024x1024')
const quality = ref<'standard'|'hd'>('standard')
const style = ref<'vivid'|'natural'>('vivid')
const generatedImageUrl = ref('')
const isLoading = ref(false)
const error = ref('')

const sizes = [
  { value: '256x256', label: '256x256' },
  { value: '512x512', label: '512x512' },
  { value: '1024x1024', label: '1024x1024' },
  { value: '1024x1792', label: '1024x1792' },
  { value: '1792x1024', label: '1792x1024' },
]

const qualities = [
  { value: 'standard', label: 'Standard' },
  { value: 'hd', label: 'HD' },
]

const styles:{value:"vivid"|"natural",label:string}[] = [
  { value: 'vivid', label: 'Vivid' },
  { value: 'natural', label: 'Natural' },
]

const isGenerateDisabled = computed(() => !prompt.value.trim() || isLoading.value)

const generateImage = async () => {
  if (isGenerateDisabled.value) return
  
  isLoading.value = true
  error.value = ''
  generatedImageUrl.value = ''
  const ai = new OpenAI({baseURL:"https://indiecloud.co/api/v1",apiKey:"[EMPTY]",dangerouslyAllowBrowser: true});
  try {
    const response = await ai.images.generate({
        prompt: prompt.value,
        size: size.value,
        quality: quality.value,
        style: style.value,
        n: 1,
        response_format: 'url',
      })
    
    const imageUrl = response.data[0].url
		if (!imageUrl) throw new Error('Failed to generate image')
		generatedImageUrl.value = imageUrl
  } catch (err:any) {
    error.value = err.message || 'An error occurred'
  } finally {
    isLoading.value = false
  }
}

const { start: startShimmer } = useTimeoutFn(() => {
  if (isLoading.value) startShimmer()
}, 100, { immediate: false })

</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-primary to-secondary text-gray-800">
    <div class="w-full max-w-2xl p-8 rounded-xl bg-white/20 backdrop-blur-md shadow-lg border border-white/30 transition-all duration-500 hover:shadow-xl hover:bg-white/30">
      <h1 class="text-4xl font-bold mb-6 text-center text-accent">
        <div class="i-mdi-image-filter-vintage inline-block mr-2 text-5xl animate-spin-slow"></div>
        AI Image Generator
      </h1>
<div class="mb-6">
    <label class="block text-sm font-medium mb-2" for="prompt">Prompt</label>
    <div class="relative">
      <input
        id="prompt"
        v-model="prompt"
        type="text"
        class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
        placeholder="Describe the image you want to generate..."
        @keydown.enter="generateImage"

      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <div class="i-mdi-magic text-2xl text-accent"></div>
      </div>
    </div>
  </div>
  
  <div class="grid grid-cols-3 gap-4 mb-6">
    <div>
      <label class="block text-sm font-medium mb-2" for="size">Size</label>
      <select
        id="size"
        v-model="size"
        class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
      >
        <option v-for="option in sizes" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium mb-2" for="quality">Quality</label>
      <select
        id="quality"
        v-model="quality"
        class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
      >
        <option v-for="option in qualities" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium mb-2" for="style">Style</label>
      <select
        id="style"
        v-model="style"
        class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
      >
        <option v-for="option in styles" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
  
  <button
    @click="generateImage"
    :disabled="isGenerateDisabled"
    class="w-full py-3 px-6 rounded-lg bg-accent text-white font-semibold shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <Icon v-if="isLoading" icon="mdi-loading animate-spin inline-block mr-2" />
    <Icon v-else icon="mdi-camera inline-block mr-2" />
    {{ isLoading ? 'Generating...' : 'Generate Image' }}
  </button>
  
  <div v-if="error" class="mt-4 p-4 bg-error/20 text-error rounded-lg">
    {{ error }}
  </div>
  
  <div v-if="generatedImageUrl" class="mt-6">
    <h2 class="text-2xl font-semibold mb-4">Generated Image</h2>
    <div class="relative overflow-hidden rounded-lg shadow-lg">
      <img :src="generatedImageUrl" alt="Generated Image" class="w-full h-auto object-cover transition-all duration-500 hover:scale-105">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
        <a :href="generatedImageUrl" download="generated-image.png" class="bg-white text-gray-800 py-2 px-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
          <Icon icon="mdi-download inline-block mr-2" />
          Download
        </a>
</div>
      </div>
    </div>
  </div>
</div>
</template>