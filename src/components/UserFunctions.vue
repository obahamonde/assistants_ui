<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
const rxProps = toRefs(props);
const computedUrl = computed(() => rxProps.url.value);
const src = usePubSub<any>(unref(computedUrl));
watch(computedUrl,(newVal, oldVal) => {
  if (newVal !== oldVal && newVal) {
    src.close();
    src.eventSource.value = new EventSource(newVal);
  }
});
const { data, err, done, pub, status } = src
</script>
<template>
  <div>
    <div>{{ computedUrl }}</div>
    <slot :data="data" :err="err" :done="done" :pub="pub" :status="status" />
  </div>
</template>
<style scoped></style>
