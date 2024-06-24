<script setup lang="ts">
const props = defineProps<{ namespace: string }>();
const content = ref<string>('');
const q = new QuipuBase('chat', props.namespace);
const { state } = useStore();
const showImageUpload = ref(false);
const handler = (data: string) => {
  if (!state.current) return;
  if (state.current.messages[state.current.messages.length - 1].role === 'user') {
    state.current.messages.push({ role: 'assistant', content: data });
  } else {
    state.current.messages[state.current.messages.length - 1].content += data;
  }
};

const useChat = async () => {
  if (!content.value) return;
  if (showImageUpload.value && files.value.length) {
    await getVisionResponse();
    showImageUpload.value = false;
    return;
  }
  state.current.messages.push({ role: 'user', content: content.value });
  content.value = '';
  await q.chat(state.current, handler);
};

// Image upload and description logic
const files = ref<File[]>([]);
const fileInput = ref<HTMLInputElement | null>(null);

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
  formData.append('file', file);

  const response = await fetch('https://ivb84ab1ubo4dz-8000.proxy.runpod.net/upload', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const result = await response.json();
    return result.url;
  } else {
    throw new Error('Failed to upload image');
  } 
};

const getVisionResponse = async () => {

  try {
    const imagePromises = files.value.map(file => uploadImage(file));
    const images = await Promise.all(imagePromises);

    const response = await fetch('https://ivb84ab1ubo4dz-8000.proxy.runpod.net/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: content.value,
        images,
      }),
    });

    if (response.ok) {
      const result = await response.text();
      state.current.messages.push({ role: 'assistant', content: result });
    } else {
      alert('Failed to get description');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while uploading the images');
  }
};
</script>

<template>
  <div class="col center p-8 overflow-y-auto">
<div class="row center mx-auto gap-4">    
<textarea
      v-model="content"
      @keyup.enter="useChat"
      placeholder="Type your message here..."
      class="bg-gray-500 w-full max-w-192 min-w-128 p-2 rounded sh focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
    ></textarea>
<Icon icon="mdi:eye" @click="showImageUpload = !showImageUpload" class="cp scale" />
<AppSearch :namespace="props.namespace" />
</div>
    <div class="col center p-6 m-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer" 
      @dragover.prevent @drop="handleDrop" @click="triggerFileInput" v-if="showImageUpload">
      <p class="text-gray-400">Drag and drop your images here or click to upload</p 
>
      <input type="file" multiple @change="handleFileChange" class="hidden" ref="fileInput" />
      <Icon icon="carbon:cloud-upload"  class="text-4xl text-gray-400" />
      <p> {{ files.length }} images selected</p>
    </div>
    <div>
      <p v-for="message in state.current.messages" :key="message.content">
        <div v-if="message.role === 'assistant' || message.role === 'user'">
          <img
            :src="message.role === 'user' ? state.user!.picture : `/svg/${state.current.model.toLowerCase()}.svg`"
            class="x2 rf sh"
            :class="message.role === 'user' ? 'float-right m-1' : 'float-left m-1'"
          />
          <div>
            <AppAudio :content="message.content" />
            <AppTextBlock :content="message.content" />
          </div>
        </div>
      </p>
    </div>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
}
</style>
