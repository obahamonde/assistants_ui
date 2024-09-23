<script setup lang="ts">
import { OpenAI } from "openai";
const prompt = ref("");
const size = ref<
  "256x256" | "512x512" | "1024x1024" | "1024x1792" | "1792x1024"
>("1024x1024");
const quality = ref<"standard" | "hd">("standard");
const style = ref<"vivid" | "natural">("vivid");
const generatedImageUrl = ref("");
const isLoading = ref(false);
const error = ref("");

// New refs for variations and edits
const selectedFile = ref<File | null>(null);
const maskFile = ref<File | null>(null);
const variationPrompt = ref("");
const editPrompt = ref("");
const mode = ref<"generate" | "edit" | "variation">("generate");

const sizes = [
  { value: "256x256", label: "256x256" },
  { value: "512x512", label: "512x512" },
  { value: "1024x1024", label: "1024x1024" },
  { value: "1024x1792", label: "1024x1792" },
  { value: "1792x1024", label: "1792x1024" },
];

const qualities = [
  { value: "standard", label: "Standard" },
  { value: "hd", label: "HD" },
];

const styles: { value: "vivid" | "natural"; label: string }[] = [
  { value: "vivid", label: "Vivid" },
  { value: "natural", label: "Natural" },
];

const isGenerateDisabled = computed(() => {
  if (mode.value === "generate") {
    return !prompt.value.trim() || isLoading.value;
  } else if (mode.value === "edit") {
    return !selectedFile.value || !editPrompt.value.trim() || isLoading.value;
  } else {
    return (
      !selectedFile.value || !variationPrompt.value.trim() || isLoading.value
    );
  }
});

const ai = new OpenAI({
  baseURL: "https://indiecloud.co/v1",
  apiKey: "[EMPTY]",
  dangerouslyAllowBrowser: true,
});

const generateImage = async () => {
  if (isGenerateDisabled.value) return;

  isLoading.value = true;
  error.value = "";
  generatedImageUrl.value = "";
  let response;
  try {
    size.value in ["1024x1792", "1792x1024"]
      ? (size.value = "1024x1024")
      : (size.value = "512x512");
    if (mode.value === "generate") {
      response = await ai.images.generate({
        prompt: prompt.value,
        size: size.value,
        quality: quality.value,
        style: style.value,
        n: 1,
        response_format: "url",
      });
    } else if (mode.value === "edit") {
      if (!selectedFile.value) throw new Error("No image selected");
      if (!maskFile.value) {
        response = await ai.images.edit({
          image: selectedFile.value,
          prompt: editPrompt.value,
          size: size.value,
          n: 1,
          response_format: "url",
        });
      } else {
        response = await ai.images.edit({
          image: selectedFile.value,
          prompt: editPrompt.value,
          mask: maskFile.value,
          size: size.value,
          n: 1,
          response_format: "url",
        });
      }
    } else {
      if (!selectedFile.value) throw new Error("No image selected");
      response = await ai.images.createVariation({
        image: selectedFile.value,
        prompt: variationPrompt.value,
        size: size.value
      });
    }
    const url = response.data[0].url;
    if (!url) throw new Error("No image generated");
    generatedImageUrl.value = url;
  } catch (e) {
    error.value = e as string;
  } finally {
    isLoading.value = false;
  }
};

const handleFileChange = (event: Event, fileType: "main" | "mask") => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    if (fileType === "main") {
      selectedFile.value = target.files[0];
    } else {
      maskFile.value = target.files[0];
    }
  }
};

const { start: startShimmer } = useTimeoutFn(
  () => {
    if (isLoading.value) startShimmer();
  },
  100,
  { immediate: false },
);
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-primary to-secondary text-gray-800 w-full"
  >
    <div
      class="w-full max-w-2xl p-8 rounded-xl bg-white/20 backdrop-blur-md shadow-lg border border-white/30 transition-all duration-500 hover:shadow-xl hover:bg-white/30"
    >
      <h1 class="text-4xl font-bold mb-6 text-center text-accent">
        <div
          class="i-mdi-image-filter-vintage inline-block mr-2 text-5xl animate-spin-slow"
        ></div>
        AI Image Generator
      </h1>

      <div class="mb-6">
        <div class="flex justify-center space-x-4 mb-4">
          <button
            @click="mode = 'generate'"
            :class="[
              'px-4 py-2 rounded-lg transition-all duration-300',
              mode === 'generate'
                ? 'bg-accent text-white'
                : 'bg-white/50 text-gray-800',
            ]"
          >
            Generate
          </button>
          <button
            @click="mode = 'edit'"
            :class="[
              'px-4 py-2 rounded-lg transition-all duration-300',
              mode === 'edit'
                ? 'bg-accent text-white'
                : 'bg-white/50 text-gray-800',
            ]"
          >
            Edit
          </button>
          <button
            @click="mode = 'variation'"
            :class="[
              'px-4 py-2 rounded-lg transition-all duration-300',
              mode === 'variation'
                ? 'bg-accent text-white'
                : 'bg-white/50 text-gray-800',
            ]"
          >
            Variation
          </button>
        </div>

        <template v-if="mode === 'generate'">
          <label class="block text-sm font-medium mb-2" for="prompt"
            >Prompt</label
          >
          <div class="relative">
            <input
              id="prompt"
              v-model="prompt"
              type="text"
              class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
              placeholder="Describe the image you want to generate..."
              @keydown.enter="generateImage"
            />
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
            >
              <div class="i-mdi-magic text-2xl text-accent"></div>
            </div>
          </div>
        </template>

        <template v-else-if="mode === 'edit'">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="editImage"
              >Image to Edit</label
            >
            <input
              id="editImage"
              type="file"
              accept="image/*"
              @change="(e) => handleFileChange(e, 'main')"
              class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="maskImage"
              >Mask Image (Optional)</label
            >
            <input
              id="maskImage"
              type="file"
              accept="image/*"
              @change="(e) => handleFileChange(e, 'mask')"
              class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="editPrompt"
              >Edit Prompt</label
            >
            <input
              id="editPrompt"
              v-model="editPrompt"
              type="text"
              class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
              placeholder="Describe the edits you want to make..."
              @keydown.enter="generateImage"
            />
          </div>
        </template>

        <template v-else>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="variationImage"
              >Image for Variation</label
            >
            <input
              id="variationImage"
              type="file"
              accept="image/*"
              @change="(e) => handleFileChange(e, 'main')"
              class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="variationPrompt"
              >Variation Prompt</label
            >
            <input
              id="variationPrompt"
              v-model="variationPrompt"
              type="text"
              class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
              placeholder="Describe the variation you want..."
              @keydown.enter="generateImage"
            />
          </div>
        </template>
      </div>

      <div class="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label class="block text-sm font-medium mb-2" for="size">Size</label>
          <select
            id="size"
            v-model="size"
            class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
          >
            <option
              v-for="option in sizes"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2" for="quality"
            >Quality</label
          >
          <select
            id="quality"
            v-model="quality"
            class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
          >
            <option
              v-for="option in qualities"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2" for="style"
            >Style</label
          >
          <select
            id="style"
            v-model="style"
            class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
          >
            <option
              v-for="option in styles"
              :key="option.value"
              :value="option.value"
            >
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
        <Icon
          v-if="isLoading"
          icon="mdi-loading animate-spin inline-block mr-2"
        />
        <Icon v-else icon="mdi-camera inline-block mr-2" />
        {{
          isLoading
            ? "Processing..."
            : mode === "generate"
              ? "Generate Image"
              : mode === "edit"
                ? "Edit Image"
                : "Create Variation"
        }}
      </button>

      <div v-if="error" class="mt-4 p-4 bg-error/20 text-error rounded-lg">
        {{ error }}
      </div>

      <div v-if="generatedImageUrl" class="mt-6">
        <h2 class="text-2xl font-semibold mb-4">Generated Image</h2>
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <img
            :src="generatedImageUrl"
            alt="Generated Image"
            class="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4"
          >
            <a
              :href="generatedImageUrl"
              download="generated-image.png"
              class="bg-white text-gray-800 py-2 px-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              <Icon icon="mdi-download inline-block mr-2" />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

