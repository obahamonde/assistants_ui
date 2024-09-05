<script setup lang="ts">
import type { VectorStoreFile } from "openai/resources/beta/vector-stores"
import type { VectorStore } from "openai/resources/beta/vector-stores"
import { OpenAI } from "openai";

type SimilaritySearchResult = {
  id: string;
  file_id: string;
  score: number;
  content: string;
}

const client = new OpenAI({
 baseURL: "https://indiecloud.co/v1",
 apiKey: "sk-proj-1234567890",
  dangerouslyAllowBrowser: true,

});

const vectorStoreFilesState = reactive<{
	newStore: string;
  files: VectorStoreFile[];
  results: SimilaritySearchResult[];
  store: VectorStore | null;
	stores: VectorStore[];
}>({
	newStore: "",
  files: [],
  results: [],
  store: null,
	stores: [],
});

const getFile = async (vid:string,id: string) => {
  const response = await client.beta.vectorStores.files.retrieve(vid,id);
  vectorStoreFilesState.files.push(response);
}

const getStore = async (id: string) => {
  try {
    const response = await client.beta.vectorStores.retrieve(id);
    vectorStoreFilesState.store = response;
		await getFiles(id);
  } catch (error) {
			console.error(error);
  }
}

const createStore = async (namespace: string) => {
  const response = await client.beta.vectorStores.create({
    name: namespace,
  });
  vectorStoreFilesState.store = response;
}

const getFiles = async (id: string) => {
  const response = await client.beta.vectorStores.files.list(id);
  vectorStoreFilesState.files = response.data;
}


const getStores = async () => {
  const response = await client.beta.vectorStores.list()
  vectorStoreFilesState.stores = response.data;
}

onMounted(async () => {
  await getStores();
});

</script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <aside class="w-64 bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-4 transition-transform transform -translate-x-full md:translate-x-0">
      <h2 class="text-2xl font-semibold mb-4">Vector Store Dashboard</h2>
      <ul>
			<input type="text" v-model="vectorStoreFilesState.newStore" />
			<button @click="createStore(vectorStoreFilesState.newStore)">Create Store</button>

		
        <li v-for="store in vectorStoreFilesState.stores" :key="store.id" class="mb-2">
          <button @click="getStore(store.id)" class="w-full text-left p-2 rounded hover:bg-white hover:bg-opacity-20">{{ store.name }}</button>
        </li>
      </ul>
    </aside>
    <main class="flex-1 p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="file in vectorStoreFilesState.files" :key="file.id" class="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">{{ file.object }}</h3>
          <p class="mt-2">{{ file.id }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
body {
  @apply bg-gradient-to-br from-gray-900 to-gray-800 text-white;
}

aside {
  @apply bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-4 transition-transform transform -translate-x-full md:translate-x-0;
}

main {
  @apply flex-1 p-6;
}

.grid > div {
  @apply bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg;
}

button {
  @apply w-full text-left p-2 rounded hover:bg-white hover:bg-opacity-20;
}
</style>