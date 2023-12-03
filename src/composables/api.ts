export const useAPI = <J, T>(
  url: ComputedRef<string>,
  events: string[],
  options?: EventSourceInit,
) => {
  const dataStream = ref<T[]>([]);
  let eventSource: EventSource | null = null;

  const sub = () => {
    // Cerrar EventSource anterior si existe
    if (eventSource) {
      eventSource.close();
    }

    // Iniciar un nuevo EventSource
    eventSource = new EventSource(url.value, options);

    // Configurar manejadores para los eventos especificados
    events.forEach((event) => {
      eventSource!.addEventListener(event, (e: any) => {
        try {
          const parsedData = JSON.parse(e.data) as T;
          // @ts-ignore
          dataStream.value.push(parsedData);
        } catch (error) {
          console.error("Error al parsear los datos del evento:", error);
        }
      });
    });

    eventSource.addEventListener("error", (e) => {
      if (e.eventPhase === EventSource.CLOSED) {
        console.log("Conexión cerrada");
      } else {
        console.error("Error de conexión");
      }
    });
  };

  const pub = async (data: J) => {
    await fetch(url.value, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  onUnmounted(() => {
    if (eventSource) {
      eventSource.close();
    }
  });

  watch(url, (newUrl, oldUrl) => {
    if (oldUrl !== newUrl) {
      sub();
    }
  });

  return {
    dataStream,
    sub,
    pub,
  };
};
