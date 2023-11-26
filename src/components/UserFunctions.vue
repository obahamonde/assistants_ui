<script setup lang="ts">
const props = defineProps({
		url: {
				type: String,
				required: true
		},
		options: {
				type: Object,
				default: () => ({})
		}
})
const rxProps = reactive(props)
const { data, err, done, sub, pub } = usePubSub<any>(rxProps.url, rxProps.options)
onMounted(async () => {
	 sub()
})
</script>
<template>
<div>
<slot :data="data" :err="err" :done="done" :pub="pub" />
</div>
</template>
<style scoped>

</style>