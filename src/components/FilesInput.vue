<script setup lang="ts">
import type { User, FileObject } from "~/types";
const props = defineProps<{
  user: User;
}>();
const { state } = useStore();
const { response, request } = useRequest<FileObject[]>();
const files = ref<FileObject[]>([]);
const show = ref(false);
const dropzoneRef = ref<HTMLElement | null>(null);
const onDrop = async (files: File[] | null, event: DragEvent) => {
  if (!files) return;
  event.preventDefault();
  const promises = files.map(async (f) => {
    await addFile(f);
  });
  await Promise.all(promises);
  await getFiles();
};
const { isOverDropZone } = useDropZone(dropzoneRef, {
  onDrop,
});
const addFile = async (f: File) => {
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
      await addFile(f);
    });
    await Promise.all(promises);
    await getFiles();
  };
  input.click();
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
  if (!state.assistant) return;
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
        <slot></slot>
        <button
          class="btn-icon col center"
          v-if="files.length > 0 && state.assistant"
          @click="show = !show"

        >
          <Icon class="x2" title="Show Uploaded Files" icon="mdi-upload" />
        </button>
        <button class="btn-icon col center" @click="inputFiles" v-if="state.assistant">
          <Icon class="x2" icon="mdi-paperclip" title="Attach Files" />
        </button>
      </div>
    </div>
    <div class="grid6" v-if="show">
      <FileObjects :files="files" @delete="deleteFile($event)" />
    </div>
  </section>
</template>
