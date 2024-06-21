<script setup lang="ts">
import { useRequest } from "~/composables/request";

const { request, response, err, loading, lastResponseTime } = useRequest();

const allowed = computed(() => {
  const now = Number(useNow().value);
  const last = Number(lastResponseTime.value);
  return now - last > props.debounce * 1000;
});

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  options: {
    type: Object,
    required: false,
    default: () => ({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }),
  },
  refetch: {
    type: Boolean,
    required: false,
    default: true,
  },
  debounce: {
    type: Number,
    required: false,
    default: 2,
  },
});

const rxProps = reactive(props);

const fetchData = async () => {
  if (!allowed.value) return;
  if (rxProps.refetch) {
    await request(rxProps.url, rxProps.options);
  }
};

const { state } = useStore();

onMounted(async () => {
  await request(props.url, props.options);
});

watch(rxProps, fetchData);

watchEffect(() => {
  if (err.value) {
    state.notifications.push({
      status: "error",
      message:
        typeof err.value === "string" ? err.value : JSON.stringify(err.value),
    });
  }
});

const loaderActive = computed(() => loading.value);
</script>

<template>
  <div v-if="!err && !loaderActive && response">
    <slot :="response"></slot>
  </div>
  <div v-else-if="err">
    <slot name="error" :error="err">
      <p class="text-error">
        An error occurred:
        {{ typeof err === "string" ? err : JSON.stringify(err) }}
      </p>
    </slot>
  </div>
  <div v-else-if="loaderActive">
    <slot name="loading">
      <Icon icon="mdi-loading" class="animate-spin x2" />
    </slot>
  </div>
</template>
