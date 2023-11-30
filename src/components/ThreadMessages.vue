<script setup lang="ts">
import { ThreadMessage, Thread, Run, Assistant } from '~/types';
const props = defineProps<{
	thread: Thread;
	run: Run;
	assistant: Assistant
}>();
const { state } = useStore();
const { data } = usePubSub<ThreadMessage>(`/api/events/${props.thread.id}?run_id=${props.run.id}`);
watch(data, (newVal, oldVal) => {
	if (newVal !== oldVal && newVal) {
		state.messages.push(newVal as ThreadMessage);
	}
});
</script>
<template>
<div v-for="message in state.messages">
	<div class="col center" v-for="content in message.content">
	<ChatMessage v-if="message.role=='assistant'"
		:image="props.assistant.avatar"
		:content="content.text.value"
		:reverse="true"
	/>
	<ChatMessage v-else
		:image="state.user!.picture!"
		:content="content.text.value"
		:reverse="false"
	/>
	</div>
</div>
</template>
<style scoped>

</style>