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
<style scoped>
.draggable-item {
  cursor: grab;
  transition: all 0.3s ease;
}

.draggable-item:active {
  cursor: grabbing;
}

.draggable-item.is-dragging {
  opacity: 0.5;
  transform: scale(1.05);
}

.drop-zone {
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.3s ease;
}

.drop-zone.is-over {
  background-color: rgba(0, 0, 0, 0.1);
  border-color: #666;
}
</style>
