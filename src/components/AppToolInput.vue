<script setup lang="ts">
const emit = defineEmits(["send"]);

const { state } = useStore();

const showImageUpload = ref(false);

const fileInput = ref<HTMLInputElement | null>(null);

const files = ref<File[]>([]);

const triggerFileInput = () => {
  fileInput.value?.click();
  files.value = [];
  files.value = Array.from(fileInput.value?.files || []);
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    files.value = Array.from(input.files);
  }
};

const handleDrop = (event: DragEvent) => {
  if (event.dataTransfer?.files) {
    files.value = Array.from(event.dataTransfer.files);
  }
};

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    "https://ivb84ab1ubo4dz-8000.proxy.runpod.net/upload",
    {
      method: "POST",
      body: formData,
    },
  );

  if (response.ok) {
    const result = await response.json();
    return result.url;
  } else {
    throw new Error("Failed to upload image");
  }
};

const getVisionResponse = async (content: string) => {
  try {
    const imagePromises = files.value.map((file) => uploadImage(file));
    const images = await Promise.all(imagePromises);

    const response = await fetch(
      "https://ivb84ab1ubo4dz-8000.proxy.runpod.net/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: content,
          images,
        }),
      },
    );

    if (response.ok) {
      const result = await response.text();
      state.queue.messages.push({ role: "assistant", content: result });
    } else {
      alert("Failed to get description");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while uploading the images");
  }
};
</script>

<template>
  <div class="row center gap-2 z-999 fixed top-0 mx-auto">
    <AppInput @send="getVisionResponse" />
    <Icon
      icon="mdi:eye"
      @click="showImageUpload = !showImageUpload"
      class="cp scale x2"
    />
    <div
      class="col center p-6 m-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer"
      @dragover.prevent
      @drop="handleDrop"
      @click="triggerFileInput"
      v-if="showImageUpload"
    >
      <p class="text-gray-400">
        Drag and drop your images here or click to upload
      </p>
      <input
        type="file"
        multiple
        @change="handleFileChange"
        class="hidden"
        ref="fileInput"
      />
      <Icon icon="carbon:cloud-upload" class="text-4xl text-gray-400" />
      <p>{{ files.length }} images selected</p>
    </div>
  </div>
</template>
