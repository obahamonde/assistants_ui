import { UnwrapRef } from "vue";

export const usePubSub = <T>(url: string, options?: EventSourceInit) => {
	const data = ref<T>(undefined as any as T);
	const err = ref<any>(null)
	const done = ref<boolean>(false);

	const sub = () => {
		try {
			const eventSource = new EventSource(url, options);
			eventSource.onmessage = (event: MessageEvent) => {
				data.value = typeof event.data === "string" ? event.data : JSON.parse(event.data);
			};
			eventSource.onerror = (event: Event) => {
				err.value = event;
				eventSource.close();
			};
			eventSource.addEventListener("done", () => {
				done.value = true;
				eventSource.close();
			});
		}
		catch (e: any) {
			console.log(e)
		}
	}
	const pub = async (prompt: string) => {
		try {
			await useFetch(url + "?prompt=" + prompt, {
				method: "POST",
			}).text();
		}
		catch (e: any) {
			console.log(e)
		}
	}

	return { data, err, done, sub, pub }

}
