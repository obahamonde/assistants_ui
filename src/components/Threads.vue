<script setup lang="ts">
import type { Thread, User } from "~/types";
const { response, request } = useRequest<Thread[] | Thread>();
const props = defineProps<{
  user: User;
}>();
const { state } = useStore();
const drawer = ref(true);
const threads = ref<Thread[]>([]);
const getThreads = async () => {
  await request(`/api/thread/${props.user.sub}`, { method: "GET" });
  threads.value = response.value as Thread[];
};
const addThread = async () => {
  try {
    await request(`/api/thread/${props.user.sub}?title=[New Thread]`, {
      method: "POST",
    });
    await getThreads();
  } catch (e) {
    console.log(e);
  }
};
const delThread = async (thread: Thread) => {
  try {
    await request(
      `/api/thread/${props.user.sub}?id=${thread.id}&title=${thread.title!}`,
      {
        method: "DELETE",
      },
    );
    await getThreads();
    if (state.thread?.id === thread.id) {
      state.thread = null;
    }
  } catch (e) {
    console.log(e);
  }
};
onMounted(async () => {
  await getThreads();
});
</script>
<template>
  <Icon
    icon="mdi-menu"
    class="btn-icon tl fixed m-2 text-primary z-50"
    @click="drawer = !drawer"
  />
  <div
    class="p-8 col items-center h-full backdrop-blur-md sh slide-left"
    v-if="drawer"
  >
    <VButton text="Create Thread" @click="addThread" v-if="state.thread" />
    <GradientButton text="New Thread" @click="addThread" v-else />
    <div
      v-for="thread in threads"
      :key="thread.id"
      class="m-4 col center gap-4 bg-gray-300 sh p-2 rounded"
    >
      <div class="col center m-2">
        <strong
          @click="state.thread = thread"
          class="hover:underline cp"
          :class="
            state.thread && state.thread.id === thread.id
              ? 'text-accent'
              : 'text-primary'
          "
          >{{ thread.title }}</strong
        >
        <p class="text-primary text-center">
          {{ new Date(thread.created_at * 1000).toLocaleString() }}
        </p>
        <Icon
          icon="mdi-delete"
          class="cp x1 opacity-50 hover:opacity-100 scale text-warning hover:text-error"
          @click="delThread(thread)"
        />
      </div>
    </div>
  </div>
</template>
