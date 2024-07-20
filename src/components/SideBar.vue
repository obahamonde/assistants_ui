
<script setup lang="ts">
import type { Chat } from '@/types';
const props = defineProps<{
  namespace: string;
}>();
const emit = defineEmits(["open"]);
const sidebarOpen = ref(false);
const { state } = useStore();
const modelPicture = computed(()=>`/svg/${state.current.model.toLowerCase()}.svg`);
const getChats = async () => {
  const { data } = await useFetch("https://chat.indiecloud.co/api/chat/"+props.namespace).json<Chat[]>();
  state.chats = unref(data) || [];
};

const toggleSidebar = async () => {
  sidebarOpen.value = !sidebarOpen.value;
  emit("open", sidebarOpen.value);
  sidebarOpen.value ? await getChats() : null;
};
const handleChange = () => {
// @ts-ignore
  state.current = { model: state.current.model, messages: [], instruction: ''};
};
const deleteChat = async (item: Chat) => {
  await useFetch("https://chat.indiecloud.co/api/chat/"+props.namespace+"/"+item.key, { method: "DELETE" });
  await getChats();
};
onMounted(getChats);

</script>

<template>
  <div class="relative" style="z-index: 5000">
    <button
      @click="toggleSidebar"
      class="fixed tl bg-black x2 col center btn-icon"
      style="z-index: 9999"
    >
      <Icon icon="mdi-menu" class="text-white dark:text-gray-800 x2" />
    </button>
    <aside
      :class="[
        'fixed top-0 left-0 w-72 h-full p-2 text-white bg-gradient-to-br animate-gradient-bg overflow-y-auto',
        'transition-transform duration-500 ease-in-out transform z-40',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <nav class="mt-8">
      
         
            <p
              class="flex items-center p-2 cp rounded text-xs col center gap-4"
            >

              <img
                :src="modelPicture"
                class="x6 rounded-full"
              />
              <select class="appearance-none border-none bg-transparent p-1 font-inherit cursor-default text-white cp text-lg" v-model="state.current.model" @change="handleChange">
                <option value="llama3-70b-8192">Meta Llama3 70B</option>
                <option value="llama3-8b-8192">Meta Llama3 8B</option>
                <option value="mixtral-8x7b-32768">MistralAI Mixtral</option>
                <option value="gemma-7b-it">Google Gemma</option>
              </select>
            </p>
        <div class="text-md p-2 text-center text-white">Instructions</div>
         <textarea v-model='state.current.instruction' class="bg-gray-700 w-full p-2 rounded sh focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-white" placeholder="Instructions"></textarea>
      </nav>
      <div class="my-4  col center w-full">
        <button class="bg-accent text-white px-4 py-2 sh rounded-lg cp scale mx-auto">
          New Chat <strong>+</strong>
        </button>
      </div>
          <div v-for="item in state.chats" :key="item.key" class="mt-2"
          @click="state.current = item; toggleSidebar()"
>           
            <p class="col center p-2 hover:bg-gray-700 bg-gray-400 rounded-lg sh rounded cp" :class="state.current.key === item.key ? 'bg-gray-700' : ''">
              <div class="bg-gray-100 text-dark rounded-3xl p-2 text-xs scale-75">{{ item.model }} <Icon icon="mdi-delete" class="text-red-500" @click.stop="deleteChat(item)" /></div>
              <div class="text-sm p-2">{{ item.messages[item.messages.length - 1].content.slice(0, 32) }}...</div>
            </p>
          </div>
      
    </aside>
  </div>
</template>

<style scoped>
@keyframes gradient-bg {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-bg {
  background: linear-gradient(135deg, #2a5ec0, #16eed1);
  background-size: 200% 200%;
  animation: gradient-bg 10s infinite linear;
}


</style>