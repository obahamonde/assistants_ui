User
<script setup lang="ts">
const { speech, isListening, result, fetchVoice } = useSpeech("es-MX");
const handleSpeech = async () => {
  if (isListening.value) {
    speech.stop();
    await fetchVoice(result.value,"api/audio/");
    result.value = "";
  } else {
    speech.start();
  }
};
</script>
<template>
  <button class="btn-icon col center hover:bg-black cp">
    <Icon
      :icon="isListening ? 'mdi-microphone-off' : 'mdi-microphone'"
      @click="handleSpeech()"
      class="x2 text-primary  hover:text-white"
    />
  </button>
</template>