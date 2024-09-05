export const useDrag = <T extends { id: string }>() => {
  const isOverDropzone = ref(false);
  const dropzone = ref<T[]>([]);
  const draggableData = ref<T>();
  const onDragStart = (e: DragEvent, data: T) => {
    e.dataTransfer?.setData("application/json", JSON.stringify(data));
  };
  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    isOverDropzone.value = true;
  };
  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    isOverDropzone.value = false;
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isOverDropzone.value = false;
    ("");

    const data = e.dataTransfer?.getData("application/json");
    if (data) {
      const obj = JSON.parse(data);
      if (!dropzone.value.find((d) => d.id === obj.id)) {
        dropzone.value.push(obj);
      }
    }
  };

  const el = ref<HTMLElement>();

  onMounted(() => {
    if (el.value) {
      el.value.addEventListener("dragover", onDragOver);
      el.value.addEventListener("dragleave", onDragLeave);
      el.value.addEventListener("drop", onDrop);
    }
  });
  onUnmounted(() => {
    if (el.value) {
      el.value.removeEventListener("dragover", onDragOver);
      el.value.removeEventListener("dragleave", onDragLeave);
      el.value.removeEventListener("drop", onDrop);
    }
  });

  watch(draggableData, (newVal, oldVal) => {
    if (newVal !== oldVal && newVal && el.value) {
      onDragStart(new DragEvent("dragstart"), newVal);
    }
  });

  return {
    dropzone,
    draggableData,
    onDragStart,
    isOverDropzone,
    el,
  };
};
