<script setup lang="ts">
import type { Assistant, User, Thread, ThreadMessage } from "~/types";
const { state } = useStore();
const props = defineProps<{
  thread: Thread;
  user: User;
  assistant: Assistant | null;
}>();
const { request, response} = useRequest<ThreadMessage[]>()
onMounted(async()=>{
  if(!props.thread) return
  try{
    await request(`/api/threadmessage/${props.thread.id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    state.messages = response.value
  }catch(e){
    console.log(e)
  }
})

</script>
<template>
  <section class="col items-center h-screen w-full max-w-196 animate-fade-in">
    <article
       class="chat-wrapper min-w-128"
      v-for="message in state.messages"
      :key="message.id"
    >
      <div v-for="content in message.content"
      class="flex flex-col items-center justify-center space-y-2  overflow-x-auto"
      >
        <ChatMessage
          v-if="content.type == 'text' && content.text.value.length"
          :image="
            message.role === 'assistant'
              ? props.assistant
                ? props.assistant.avatar
                : '/chatbot.svg'
              : props.user.picture!
          "
          :content="content.text.value"
          :reverse="message.role === 'assistant'"
        />
      </div>
    </article>
  </section>
</template>