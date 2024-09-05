<script setup lang="ts">
const props = defineProps<{ namespace: string }>();
const useTools = ref<boolean>(false);
const { state } = useStore();
</script>
<template>
  <div class="col center p-8 overflow-y-auto">
    <div class="row center mx-auto gap-4">
      <section class="col center gap-4">
        <div class="z-50 mx-auto top-4 fixed">
          <AppChatInput
            :namespace="props.namespace"
            :useTools="useTools"
            v-if="!useTools"
            class="animate-fade-in"
          />
        </div>
        <AppMessages
          :messages="state.current.messages"
          :modelPicture="state.current.model.toLowerCase()"
          :user="state.user"
          v-if="state.user && !useTools"
        />
        <AppTools
          :messages="state.queue.messages"
          :modelPicture="state.current.model.toLowerCase()"
          :user="state.user"
          v-if="state.user && useTools"
        />
      </section>
    </div>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
}
</style>
