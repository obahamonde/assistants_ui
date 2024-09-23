<script setup lang="ts">
import { OpenAI } from "openai";
import type {
VectorStore,
VectorStoreFile,
} from "openai/resources/beta/vector-stores";

type SimilaritySearchResult = {
  id: string;
  file_id: string;
  score: number;
  content: string;
};

const client = new OpenAI({
  baseURL: "https://indiecloud.co/v1",
  apiKey: "sk-proj-1234567890",
  dangerouslyAllowBrowser: true,
});

const state = reactive<{
  newStore: string;
  files: VectorStoreFile[];
  results: SimilaritySearchResult[];
  currentStore: VectorStore | null;
  stores: VectorStore[];
  searchQuery: string;
}>({
  newStore: "",
  files: [],
  results: [],
  currentStore: null,
  stores: [],
  searchQuery: "",
});

const filteredFiles = computed(() => {
  return state.files.filter(
    (file) =>
      file.object.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      file.id.toLowerCase().includes(state.searchQuery.toLowerCase()),
  );
});

const createStore = async (namespace: string) => {
  const response = await client.beta.vectorStores.create({
    name: namespace,
  });
  state.currentStore = response;
};

const getFiles = async (id: string) => {
  const response = await client.beta.vectorStores.files.list(id);
  state.files = response.data;
};

const getStores = async () => {
  const response = await client.beta.vectorStores.list();
  state.stores = response.data;
};

const handleCreateStore = async () => {
  if (state.newStore.trim()) {
    await createStore(state.newStore);
    state.newStore = "";
    await getStores();
  }
};

const handleStoreSelect = async (store: VectorStore) => {
  state.currentStore = store;
  await getFiles(store.id);
};

const modalStore = ref<VectorStore | null>(null);
const isModalOpen = ref(false);

const showModal = (store: VectorStore) => {
  modalStore.value = store;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalStore.value = null;
};

const showStore = async (storeId: string) => {
  const store = await client.beta.vectorStores.retrieve(storeId);
  showModal(store);
};

const deleteStore = async (store: VectorStore) => {
  await client.beta.vectorStores.del(store.id);
  state.stores = state.stores.filter((s) => s.id !== store.id);
  state.currentStore = null;
  state.files = [];
  closeModal();
};

onMounted(async () => {
  await getStores();
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-error to-accent text-white">
    <div class="container mx-auto p-6">
      <h1 class="text-2xl font-bold mb-8">Vector Stores</h1>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <aside
          class="lg:col-span-1 bg-white bg-opacity-10 p-2 backdrop-blur-md rounded-lg overflow-y-auto col start"
        >
          <div class="flex mb-4">
            <input
              v-model="state.newStore"
              type="text"
              placeholder="New store name"
              class="flex-grow bg-white bg-opacity-20 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Icon
              icon="mdi-plus"
              class="x2 btn-icon"
              @click="handleCreateStore"
            />
          </div>
          <ul class="space-y-2 px-2 py-2 max-w-56 list-none">
            <li
              v-for="store in state.stores"
              :key="store.id"
              @click="handleStoreSelect(store)"
              class="overflow-hidden row start gap-2 cursor-pointer p-2 hover:shadow-md rounded-md hover:bg-white hover:bg-opacity-20 transition-colors text-xs"
              :class="{
                'bg-white bg-opacity-20': store.id === state.currentStore?.id,
              }"
            >
              <Icon
                icon="mdi-eye"
                class="h-4 w-4 hover:text-accent"
                @click="showStore(store.id)"
              />
              {{ store.name }}
            </li>
          </ul>
        </aside>

        <!-- Main content -->
        <main
          class="lg:col-span-3 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6"
        >
          <h2 class="text-2xl font-semibold mb-4">
            {{
              state.currentStore ? state.currentStore.name : "Select a store"
            }}
          </h2>

          <div v-if="state.currentStore" class="mb-6">
            <input
              v-model="state.searchQuery"
              type="text"
              placeholder="Search files..."
              class="w-full bg-white bg-opacity-20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div
            v-if="filteredFiles.length"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div
              v-for="file in filteredFiles"
              :key="file.id"
              class="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors"
            >
              <h3 class="text-lg font-semibold mb-2">{{ file.object }}</h3>
              <p class="text-sm opacity-80">ID: {{ file.id }}</p>
            </div>
          </div>

          <p v-else-if="state.currentStore" class="text-center opacity-60">
            No files found in this store.
          </p>

          <p v-else class="text-center opacity-60">
            Select a store to view its files.
          </p>
        </main>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex col center gap-4 z-50"
  >
    <Icon
      icon="mdi-close"
      class="x2 cp hover:text-red-500"
      @click="closeModal"
    />
    <div class="bg-white text-gray-800 rounded-lg p-6 max-w-md w-full">
      <h2 class="text-2xl font-bold mb-4">Store Details</h2>
      <div v-if="modalStore">
        <p><strong>ID:</strong> {{ modalStore.id }}</p>
        <p><strong>Name:</strong> {{ modalStore.name }}</p>
        <p>
          <strong>Created At:</strong>
          {{ new Date(modalStore.created_at).toLocaleString() }}
        </p>
        <p><strong>Usage:</strong> {{ modalStore.usage_bytes || "N/A" }}</p>
        <Icon
          icon="mdi-delete"
          class="x2 cp hover:text-red-500"
          @click="deleteStore(modalStore)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  @apply bg-gradient-to-br from-gray-900 to-gray-800 text-white;
}

aside {
  @apply bg-white bg-opacity-10 backdrop-blur-md shadow-lgtransition-transform transform -translate-x-full md:translate-x-0;
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
