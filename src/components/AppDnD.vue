<script setup lang="ts" generic="T">
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
const props = defineProps<{
  data: T[];
}>();
const [parentRef, values] = useDragAndDrop<T>(props.data, {
  plugins: [animations()],
});
</script>
<template>
  <div ref="parentRef">
    <slot :values="values" />
  </div>
</template>
<style scoped></style>
