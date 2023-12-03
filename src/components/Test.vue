<script setup lang="ts">
type Test = {
	ref: string;
	ts: string;
};
const props = defineProps<{
	url: string;
}>();
const messages: Ref<Test[]> = ref([]);
useEvent<Test>(props.url, async (event) => {
	messages.value.push(event);
});
</script>
<template>
<div>
{{ messages }}
</div>
</template>
<style scoped>

</style>