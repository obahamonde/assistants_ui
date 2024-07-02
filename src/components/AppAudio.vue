<script setup lang="ts">
const { fetchVoice } = useSpeech();
const props = defineProps<{ content: string }>();
const lang = ref("es") as Ref<"es" | "en">;
const gender = ref("female") as Ref<"female" | "male">;
const isHandling = ref(false);

const handleVoice = async () => {
  isHandling.value = true;
  try {
    const audio = await fetchVoice(props.content, lang.value, gender.value);
    audio.play();
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="row center gap-1 p-1 bg-gray-500 rounded-t-xl sh">
    <Icon
      :icon="isHandling ? 'mdi-stop' : 'mdi-play'"
      @click="handleVoice"
      class="cp scale"
    />
    <!--Flags of USA and Peru-->
    <span class="cp scale" @click="lang = 'en'" v-if="lang === 'es'">🇵🇪</span>
    <span class="cp scale" @click="lang = 'es'" v-else>🇺🇸</span>
    <!--Gender Icons-->
    <Icon
      :icon="
        gender === 'female'
          ? 'material-symbols:female'
          : 'material-symbols:male'
      "
      @click="gender === 'female' ? (gender = 'male') : (gender = 'female')"
      class="cp scale"
    />
  </div>
</template>
