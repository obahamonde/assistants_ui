<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  namespace: string;
}>();

const sidebarRef = ref<HTMLElement | null>(null);
const resizeHandleRef = ref<HTMLElement | null>(null);

const minWidth = 250;
const maxWidth = window.innerWidth;

const sidebarWidth = ref(400); // Initial width

const isResizing = ref(false);
const startX = ref(0);

const handleMouseDown = (e: MouseEvent) => {
  isResizing.value = true;
  startX.value = e.clientX;
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isResizing.value) return;
  const diff = startX.value - e.clientX;
  sidebarWidth.value = Math.max(
    minWidth,
    Math.min(sidebarWidth.value + diff, maxWidth),
  );
  startX.value = e.clientX;
};

const handleMouseUp = () => {
  isResizing.value = false;
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
};

onMounted(() => {
  resizeHandleRef.value?.addEventListener("mousedown", handleMouseDown);
});

onUnmounted(() => {
  resizeHandleRef.value?.removeEventListener("mousedown", handleMouseDown);
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
});

const emit = defineEmits(["open"]);
const { state } = useStore();
const sidebarOpen = ref(false);
const showImageUpload = ref(false);

const apiUrl = computed(() => `/api/vector_stores/${props.namespace}/files`);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
  emit("open", sidebarOpen.value);
};

const showArtifacts = ref(false);
const artifacts = ref<File[]>([]);

const triggerArtifactInput = () => {
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
  toggleSidebar();
};

const handleChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    artifacts.value = Array.from(target.files);
  }
  await uploadArtifacts();
  toggleSidebar();
};

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
    if (done) break;

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

const handleShowArtifacts = () => {
  showArtifacts.value = !showArtifacts.value;
  showImageUpload.value = false;
};
</script>

<template>
  <div class="relative" style="z-index: 5000">
    <button
      @click="toggleSidebar"
      class="fixed tr bg-black x2 col center btn-icon shadow-lg"
      style="z-index: 9999; top: 16px; right: 16px"
    >
      <Icon icon="mdi-document" class="text-white dark:text-gray-800 x2" />
    </button>
    <aside
      ref="sidebarRef"
      :class="[
        'fixed top-0 right-0 h-full px-8 text-white bg-gradient-to-br animate-gradient-bg overflow-y-auto backdrop-blur-sm z-50 shadow-xl',
        'transition-all duration-300 ease-in-out z-40  max-w-50vw',
        sidebarOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
      :style="{ width: `${sidebarWidth}px` }"
    >
      <div
        ref="resizeHandleRef"
        class="absolute top-0 left-0 w-1 h-full cursor-ew-resize bg-gray-600 hover:bg-gray-400 transition-colors"
      ></div>
      <div
        class="row w-full px-2 py-4 items-center justify-start gap-4 border-b border-gray-600"
      >
        <Icon
          icon="mdi:upload"
          @click="showImageUpload = !showImageUpload"
          class="cp scale x2"
          title="Upload Files"
        />
        <AppSearch :namespace="props.namespace" />
        <Icon
          icon="mdi:database"
          @click="handleShowArtifacts"
          class="cp scale x2"
          title="Show Artifacts"
        />
      </div>
      <div
        class="col center p-6 m-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer"
        @dragover.prevent
        @drop="handleDrop"
        @click="triggerArtifactInput"
        v-if="showImageUpload"
      >
        <p class="text-gray-200 text-center">
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
          class="text-4xl text-gray-400 cp scale mt-4"
        />
        <p class="mt-2">{{ artifacts.length }} files selected</p>
      </div>
      <div class="col center mt-6">
        <div v-for="artifact in state.queue.messages" class="py-4 px-8 gap-4">
          <AppTextBlock :content="artifact.content" />
        </div>
      </div>
      <section class="px-4 py-4">
        <AppStores v-if="showArtifacts" />
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

.transition-all {
  transition-property: all;
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
