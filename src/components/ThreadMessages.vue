<script setup lang="ts">
const { state } = useStore();

</script>
<template>
  
  <section class="col items-center h-screen w-full animate-fade-in">
    <article class="content-wrapper" v-if="state.thread && state.assistant && state.user">
      <div v-for="message in state.messages">
      <div v-for="content in message.content">
        <ChatMessage
        v-if="content.type == 'text'"
          :image="message.role === 'assistant' ? state.assistant.avatar : state.user.picture!"
          :content="content.text.value"
          :reverse="message.role === 'assistant' ? true : false"
        />
        </div>
      </div>
    </article>
      <div class="text-title">
        {{ state.thread ? "" : "Create a thread to start a Chat" }}
      </div>
      <div class="text-title">
        {{ state.assistant ? "" : "Pick an assistant to get Started" }}
      </div>
  
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
