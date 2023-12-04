export const useEvent = <T>(
  url: string,
  callback: (data: T) => void | Promise<void>,
) => {
  const handleSSEMessage = (event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data) as T;
      callback(data);
    } catch (e) {
      console.error("Error parsing data:", e);
    }
  };
  const initializeSSE = () => {
    const eventSource = new EventSource(url);
    eventSource.onmessage = handleSSEMessage;
    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };
    return () => eventSource.close();
  };
  onMounted(() => {
    const cleanup = initializeSSE();
    onUnmounted(() => cleanup());
  });
};
