<script setup lang="ts">
import type { FileObject } from "~/types";
const props = defineProps<{
  files: FileObject[];
}>();
const emit = defineEmits<{
  delete: [FileObject];
}>();
</script>
<template>
  <div v-for="file in props.files" :key="file.id" class="p-0 m-1 col center">
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
      <Icon
        icon="mdi-delete"
        class="x1 text-warning hover:text-error scale cp"
        @click="emit('delete', file)"
      />
    </p>
  </div>
</template>
