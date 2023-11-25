export const useServerEvent = <T>(url: string, options: EventSourceInit) => {
	const eventSource = ref<EventSource | null>(null);
	const data = ref<string>("");
	const done = ref<boolean>(false); // To track if the response is done
	const error = ref<Event | null>(null);

	onMounted(() => {
		eventSource.value = new EventSource(url, options);
		eventSource.value.onmessage = (event: MessageEvent) => {
			data.value += event.data;
		};
		eventSource.value.onerror = (event: Event) => {
			error.value = event;
			eventSource.value?.close();
		};
		eventSource.value.addEventListener("done", () => {
			done.value = true; // Set done to true when the "done" event is received
		});
	});

	onBeforeUnmount(() => {
		eventSource.value?.close();
	});

	return { data, done, error, eventSource }; // Include done in the return value
};
