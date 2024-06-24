<script setup lang="ts">
const { fetchVoice, chunkText } = useSpeech()
const props = defineProps<{ content: string }>()
const lang = ref("es") as Ref<"es" | "en">
const gender = ref("female") as Ref<"female"|"male">
const isHandling = ref(false)

const handleVoice = async () => {
  isHandling.value = true
  const chunks = chunkText(props.content, 239)
  
  const playNextAudio = async (index: number) => {
    if (index >= chunks.length) {
      isHandling.value = false
      return
    }
    
    try {
      const audio = await fetchVoice(chunks[index], lang.value, gender.value)
      audio.onended = () => playNextAudio(index + 1)
      audio.play()
    } catch (error) {
      console.error(`Error generating audio for chunk ${index}:`, error)
      playNextAudio(index + 1)
    }
  }
  
  playNextAudio(0)
}

</script>

<template>
<div class="row center gap-1 p-1 bg-gray-500 rounded-t-xl sh">
<Icon :icon="isHandling ? 'mdi-microphone-off' : 'mdi-microphone'" @click="handleVoice" class="cp scale"  />
<!--Flags of USA and Peru-->
<span class="cp scale"  @click="lang='en'" v-if="lang==='es'">🇵🇪</span>
<span class="cp scale"  @click="lang='es'" v-else >🇺🇸</span>
<!--Gender Icons-->
<Icon :icon="gender==='female' ? 'material-symbols:female' : 'material-symbols:male'" @click="gender==='female' ? gender = 'male' : gender = 'female'" class="cp scale" />
</div>
</template>

<style scoped>
/* Add your styles here */
</style>
