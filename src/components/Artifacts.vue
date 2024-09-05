<script setup lang="ts">


const props = defineProps<{
  namespace: string
}>();



const streamDoc = async (
  url: string,
  data: FormData,
  callback: (data: string) => any,
  options?: RequestInit,
) => {
  const response = await fetch(url, {
    ...options,
    method: "POST",
    body: data,
  });

  if (!response.body) {
    throw new Error("No response body");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    let lines = buffer.split("\n");

    for (let i = 0; i < lines.length - 1; i++) {
      const line = lines[i].trim();
      if (line && line !== "[DONE]") {
        callback(line + "\n");
      }
    }

    buffer = lines[lines.length - 1];
  }

  if (buffer) {
    const line = buffer.replace(/^data: /, "").trim();
    if (line && line !== "[DONE]") {
      callback(line + "\n");
    }
  }
};

const emit = defineEmits(["open"]);
const { state } = useStore();
const showImageUpload = ref(false);
const sidebarOpen = ref(false);
const apiUrl = computed(() => {
  return `/api/vector_stores/${props.namespace}/files`;
});
const toggleSidebar = async () => {
  sidebarOpen.value = !sidebarOpen.value;
  emit("open", sidebarOpen.value);
};
const artifacts = ref<File[]>([]);

const triggerArtifactInput = () => {
  // @ts-ignore
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;
  input.accept =
    ".docx,.pptx,.xlsx,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/pdf";
  input.onchange = handleChange;
  input.click();
};
const handleDrop = async (event: DragEvent) => {
  if (event.dataTransfer?.files) {
    artifacts.value = Array.from(event.dataTransfer.files);
  }
  await uploadArtifacts();
};
const handleChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    artifacts.value = Array.from(target.files);
  }
  await uploadArtifacts();
};
const uploadArtifacts = async () => {
  artifacts.value.forEach((artifact) => {
    const data = new FormData();
    data.append("file", artifact);
    streamDoc(apiUrl.value, data, (data) => {
      state.queue.messages.length
        ? (state.queue.messages[state.queue.messages.length - 1].content +=
            data)
        : state.queue.messages.push({ content: data, role: "assistant" });
    });
  });
  artifacts.value = [];
};
</script>

<template>
  <div class="relative" style="z-index: 5000">
    <button
      @click="toggleSidebar"
      class="fixed tr bg-black x2 col center btn-icon"
      style="z-index: 9999"
    >
      <Icon icon="mdi-document" class="text-white dark:text-gray-800 x2" />
    </button>
    <aside
      :class="[
        'fixed top-0 right-0 w-2/3 sh h-full px-8 text-white bg-gradient-to-br animate-gradient-bg overflow-y-auto backdrop-blur-sm z-50',
        'transition-transform duration-500 ease-in-out transform z-40',
        sidebarOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="row w-full px-2 py-4">
        <Icon
          icon="mdi:upload"
          @click="showImageUpload = !showImageUpload"
          class="cp scale x2 cp scale"
        />
        <AppSearch :namespace="props.namespace" />
      </div>
      <div
        class="col center p-6 m-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer"
        @dragover.prevent
        @drop="handleDrop"
        @click="triggerArtifactInput"
        v-if="showImageUpload"
      >
        <p class="text-gray-200">
          Drag and drop your files here or click to upload
        </p>
        <input
          type="file"
          multiple
          @change="handleChange"
          class="hidden"
          ref="fileInput"
        />
        <Icon
          icon="carbon:cloud-upload"
          class="text-4xl text-gray-400 cp scale"
        />
        <p>{{ artifacts.length }} files selected</p>
        <button
          @click="showImageUpload = false"
          class="absolute top-0 right-0 p-2 text-white bg-black rounded-full"
        >
          <Icon icon="mdi:close" class="text-white" />
        </button>
      </div>
      <div class="col center">
        <div v-for="artifact in state.queue.messages" class="py-4 px-8">
          <AppTextBlock :content="artifact.content" />
        </div>
      </div>
     <section>
      <AppStores />
    </section>
    </aside>
  </div>
</template>

<style scoped>
@keyframes gradient-bg {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-bg {
  background: linear-gradient(135deg, #0000, darkviolet);
  background-size: 200% 200%;
  animation: gradient-bg 10s infinite linear;
}
</style>
