import { UnwrapRef } from "vue";

export const useRequest = <T>() => {
  const response = ref<T>(undefined as any as T);
  const err = ref<any>(null);
  const loading = ref<boolean>(false);
  const lastResponseTime = ref<Date>();
  const request = async (
    url: string,
    options: RequestInit,
    refetch?: boolean
  ) => {
    const { data, error, isFetching } = await useFetch(url, options, {
      refetch: refetch || false,
    }).json();
    console.log(unref(data))
    response.value = unref(data) as UnwrapRef<T>;
    err.value = unref(error) as any;
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
