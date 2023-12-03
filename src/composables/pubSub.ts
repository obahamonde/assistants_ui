export const usePubSub = <T>(url: string) => {
  const { eventSource: sse, data, status, error, close } = useEventSource(url);
  const parsedData = computed(() => {
    if (data.value) {
      try {
          console.log(data.value);
          return JSON.parse(data.value) as T;
        } catch (e) {
          console.error("Error parsing data:", e);
          return data.value;
        }
      }
      return null;
    });
    const rxUrl = ref(url);
    const done = ref(false);


    sse.value ? sse.value.addEventListener("done", (e: Event) => {
      done.value = true;
      close();
    }
    ) : null;


    watch(rxUrl, (newUrl, oldUrl) => {
      if (oldUrl && sse.value) {
        sse.value.close();
      }
    }); // Use immediate option to run the effect immediately on mount

    const pub = async (prompt: string) => {
      try {
        await useFetch(`${rxUrl.value}`, {
          method: "POST",
        }).text();
      } catch (e: any) {
        console.error("Error publishing:", e);
      }
    };

    const sub = (newUrl: string) => {
      sse.value = new EventSource(newUrl);
      sse.value.addEventListener("message", (e: MessageEvent) => {
        data.value = e.data;
      });
      sse.value.addEventListener("done", (e: Event) => {
        done.value = true;
        close();
      });
    };

    return {
      data: parsedData,
      err: error,
      close,
      done,
      sub,
      pub,
      eventSource: sse,
      status,
    };
  }
