<script setup lang="ts">
import type { Thread, User } from '~/types'
const { response, request } = useRequest<Thread[] | Thread>();
const props = defineProps<{
	user: User;
}>()
const { state } = useStore();
const drawer = ref(false);
const localState = reactive({
	threads: [] as Thread[],
});
const getThreads = async () => {
	await request(`/api/thread/${props.user.sub}`, { method: 'GET' });
	localState.threads = response.value as Thread[];
};
const addThread = async () => {
	try {
		await request(`/api/thread/${props.user.sub}?title=[New Thread]`, {
			method: 'POST',

		});
		await getThreads();
	} catch (e) {
		console.log(e);
	}
};
onMounted(async () => {
	await getThreads();
});
</script>
<template>
<Icon icon="mdi-menu" class="btn-icon tl fixed m-2 text-primary z-50"  @click="drawer=!drawer" />
<div class="p-8 col items-center h-full backdrop-blur-md sh slide-left" v-if="drawer">
<button class="px-4 py-2 bg-primary text-info hover:bg-accent cp scale sh rounded-lg mb-4" @click="addThread()">Add Thread</button>
<div v-for="thread in localState.threads" :key="thread.id" class="m-2">
<strong @click="state.thread=thread" class="hover:underline cp"
:class="state.thread && state.thread.id === thread.id ? 'text-accent' : 'text-primary'"
>{{ thread.title }}</strong>
<p class="text-primary">{{ new Date(thread.created_at*1000).toLocaleString() }}</p>
</div>
</div>
</template>
<style scoped>

</style>