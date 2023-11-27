import { ref, computed, watch } from 'vue';
import { useEventSource, useFetch } from '@vueuse/core';

export const usePubSub = <T>(initialUrl: string) => {
  const { eventSource, data, status, error, close } = useEventSource(initialUrl);
  const parsedData = computed(() => {
    if (data.value) {
      try {
        return JSON.parse(data.value) as T;
      } catch (e) {
        console.error('Error parsing data:', e);
        return data.value;
      }
    }
    return null;
  });
  const rxUrl = ref(initialUrl); // Initialize with the initial URL
  const done = ref(false);

  // Watcher to react to changes in rxUrl
  watch(rxUrl, (newUrl, oldUrl) => {
    console.log('rxUrl changed:', newUrl, oldUrl);
    if (oldUrl && eventSource.value) {
      // If the URL changes, close the old EventSource
      eventSource.value.close();
    }
    if (newUrl) {
      // And open a new one with the new URL
      rxUrl.value = newUrl;
      sub(newUrl);

    }
  }); // Use immediate option to run the effect immediately on mount

  const pub = async (prompt: string) => {
    try {
      await useFetch(`${rxUrl.value}?prompt=${encodeURIComponent(prompt)}`, {
        method: "POST",
      }).text();
    } catch (e: any) {
      console.error('Error publishing:', e);
    }
  };

  const sub = (newUrl: string) => {
    eventSource.value = new EventSource(newUrl);
    eventSource.value.addEventListener("message", (e: MessageEvent) => {
      data.value = e.data;
    });
    eventSource.value.addEventListener("done", (e: Event) => {
      done.value = true;
      close();
    });
  };

  return { data: parsedData, err: error, close, done, sub, pub, eventSource, status };
};
