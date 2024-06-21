import { UnwrapRef } from "vue";

export const useRequest = <T>() => {
  const response = ref<T>(null as any as T);
  const err = ref<Error | null>(null);
  const loading = ref<boolean>(false);
  const lastResponseTime = ref<Date>();
  const request = async (
    url: string,
    options?: RequestInit,
    refetch?: boolean,
  ) => {
    const { data, error, isFetching } = await useFetch(url, options || {}, {
      refetch: refetch || false,
    }).json();
    response.value = unref(data) as UnwrapRef<T>;
    err.value = unref(error) as Error;
    loading.value = unref(isFetching.value) as boolean;
    lastResponseTime.value = new Date();
  };
  return {
    response,
    err,
    loading,
    request,
    lastResponseTime,
  };
};
