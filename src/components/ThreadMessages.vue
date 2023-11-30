<script setup lang="ts">
import { ThreadMessage, Thread, Run, Assistant } from '~/types';
const { request, response } = useRequest<ThreadMessage[]>();

const props = defineProps<{
	thread: Thread;
	run: Run;
	assistant: Assistant
}>();

const { state } = useStore();

const { data } = usePubSub<ThreadMessage>(`/api/events/${props.thread.id}?run_id=${props.run.id}`);

const getThreadMessages = async () => {
	await request(`/api/threadmessage/${props.thread.id}`, {
		method: 'GET',
	});
	state.messages = response.value as ThreadMessage[];
};

watch(data, (newVal, oldVal) => {
	if (newVal !== oldVal && newVal) {
		state.messages.push(newVal as ThreadMessage);
	}
});
onMounted(async () => {
	await getThreadMessages();
	state.messages = response.value as ThreadMessage[];
});
</script>
<template>
<div class="text-2xl">{{ props.run.status }}</div>
<div class="text-2xl">{{ props.run.id }}</div>
<div v-for="message in state.messages" v-if="state.user">
	<div class="col center" v-for="content in message.content">
	<ChatMessage v-if="message.role=='assistant'"
		:image="message.role=='assistant' ? props.assistant.avatar : state.user.picture!" 
		:content="content.text.value"
		:reverse="message.role=='assistant'"
	/>
	</div>
</div>
</template>