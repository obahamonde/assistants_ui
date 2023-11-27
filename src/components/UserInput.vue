<script setup lang="ts">
import type { User, FileObject, Message } from "~/types";
const props = defineProps<{
  user: User;
}>();
const { state } = useStore();
const { response, request } = useRequest<FileObject[]>();
const files = ref<FileObject[]>([]);
const text = ref("");
const show = ref(false);
const file_ids = ref<string[]>([]);
const dropzoneRef = ref<HTMLElement | null>(null);
const body = computed<Message>(() => {
  return {
    text: text.value,
    file_ids: file_ids.value,
    thread_id: state.thread ? state.thread.id : "",
  };
});
const onDrop = async (files: File[] | null, event: DragEvent) => {
  if (!files) return;
  event.preventDefault();
  const promises = files.map(async (f) => {
    await addFile(f, props.user);
  });
  await Promise.all(promises);
  await getFiles();
};
const { isOverDropZone } = useDropZone(dropzoneRef, {
  onDrop,
});
const addFile = async (f: File, user: User) => {
  try {
    const formData = new FormData();
    formData.append("file", f);
    await request(`/api/fileobject/${props.user.sub}`, {
      method: "POST",
      body: formData,
    });
  } catch (e) {
    console.log(e);
  }
};
const getFiles = async () => {
  await request(`/api/fileobject/${props.user.sub}`, { method: "GET" });
  files.value = response.value;
};
const inputFiles = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "*/*";
  input.multiple = true;
  input.onchange = async (e) => {
    //@ts-ignore
    const files = e!.target.files as File[];
    if (!files) return;
    const promises = Array.from(files).map(async (f) => {
      await addFile(f, props.user);
    });
    await Promise.all(promises);
    await getFiles();
  };
  input.click();
};
const addMessage = async (body: Message) => {
  try {
    await request(`/api/threadmessage`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    text.value = "";
    file_ids.value = [];
    console.log(response.value);
  } catch (e) {
    console.log(e);
  }
};
const attachFile = (file: FileObject) => {
  if (file_ids.value.includes(file.id)) {
    file_ids.value = file_ids.value.filter((id) => id !== file.id);
  } else {
    file_ids.value = [...file_ids.value, file.id];
  }
};
const deleteFile = async (file: FileObject) => {
  try {
    await request(`/api/fileobject/${props.user.sub}?id=${file.id}`, {
      method: "DELETE",
    });
    await getFiles();
  } catch (e) {
    console.log(e);
  }
};
onMounted(async () => {
  await getFiles();
});
</script>
<template>
  <input :multiple="true" type="file" accept="*/*" class="hidden" />
  <section class="overflow-auto w-full">
    <div class="backdrop-blur-md" ref="dropzoneRef">
      <div
        class="px-12 py-4 min-w-128 max-w-256 cursor-pointer row center"
        :class="isOverDropZone ? 'borded-dashed' : 'border-none'"
      >
        <textarea
          v-model="text"
          class="w-full px-4 py-2 rounded-lg mx-2"
          placeholder="Type a message"
          @keydown.enter.prevent="addMessage(body)"
        />
        <button
          class="btn-icon col center"
          v-if="files.length > 0"
          @click="show = !show"
        >
          <Icon class="x2" title="Show Uploaded Files" icon="mdi-upload" />
        </button>
        <button class="btn-icon col center" @click="inputFiles">
          <Icon class="x2" icon="mdi-paperclip" title="Attach Files" />
        </button>
      </div>
    </div>
    <div class="grid6" v-if="show">
      <div v-for="file in files" :key="file.id" class="p-0 m-1 col center">
        <div v-if="file.status_details.includes('image')">
          <img :src="file.url" class="x8" />
        </div>
        <div
          v-else-if="
            file.status_details.includes('pdf') ||
            file.status_details.includes('document') ||
            file.status_details.includes('office')
          "
        >
          <iframe
            :src="
              'https://docs.google.com/gview?url=' + file.url + '&embedded=true'
            "
            class="x8"
          ></iframe>
        </div>
        <div v-else class="sh rounded">
          <a :href="file.url" target="_blank" class="text-accent x8">{{
            file.id
          }}</a>
        </div>
        <span class="text-xs text-center">
          {{ new Date(file.created_at * 1000).toLocaleString() }}</span
        >
        <span class="text-xs text-center"
          >{{ (file.bytes / 1000 ** 2).toFixed(2) }}MB</span
        >
        <p class="row center">
          <input
            type="checkbox"
            :value="file.id"
            v-model="body.file_ids"
            :checked="body.file_ids.includes(file.id)"
            @click="attachFile(file)"
            class="x1"
          />
          <Icon
            icon="mdi-delete"
            class="x1 text-warning hover:text-error scale cp"
            @click="deleteFile(file)"
          />
        </p>
      </div>
    </div>
  </section>
</template>
