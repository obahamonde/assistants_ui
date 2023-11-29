<script setup lang="ts">
import { ThreadMessage, Thread, Assistant } from '~/types';
const props = defineProps<{
	thread: Thread;
	assistant: Assistant;
}>();
const { state } = useStore();
const { data, err, close, done, pub, sub, status, eventSource } = usePubSub<ThreadMessage>(`/api/events/${props.thread.id}?assistant_id=${props.assistant.id}`);
watch(data, (newVal, oldVal) => {
	if (newVal !== oldVal && newVal) {
		state.messages.push(newVal as ThreadMessage);
	}
});
</script>
<template>
<div>{{ state.messages }}</div>
</template>
<style scoped>

</style>