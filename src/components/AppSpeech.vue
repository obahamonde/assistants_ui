<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { OpenAI } from 'openai'

const ai = new OpenAI({baseURL:"https://indiecloud.co/api/v1",apiKey:"[EMPTY]",dangerouslyAllowBrowser: true});

const text = ref('')
const voice = ref('Claribel Dervla')
const speed = ref(1)
const language = ref('en')
const emotion = ref('neutral')
const isPlaying = ref(false)
const audioSrc = ref('')

const speakers = [
  "Claribel Dervla", "Daisy Studious", "Gracie Wise", "Tammie Ema", "Alison Dietlinde",
  "Ana Florence", "Annmarie Nele", "Asya Anara", "Brenda Stern", "Gitta Nikolina",
  "Henriette Usha", "Sofia Hellen", "Tammy Grit", "Tanja Adelina", "Vjollca Johnnie",
  "Andrew Chipper", "Badr Odhiambo", "Dionisio Schuyler", "Royston Min", "Viktor Eka",
  "Abrahan Mack", "Adde Michal", "Baldur Sanjin", "Craig Gutsy", "Damien Black",
  "Gilberto Mathias", "Ilkin Urbano", "Kazuhiko Atallah", "Ludvig Milivoj", "Suad Qasim",
  "Torcull Diarmuid", "Viktor Menelaos", "Zacharie Aimilios", "Nova Hogarth", "Maja Ruoho",
  "Uta Obando", "Lidiya Szekeres", "Chandra MacFarland", "Szofi Granger", "Camilla Holmström",
  "Lilya Stainthorpe", "Zofija Kendrick", "Narelle Moon", "Barbora MacLean", "Alexandra Hisakawa",
  "Alma María", "Rosemary Okafor", "Ige Behringer", "Filip Traverse", "Damjan Chapman",
  "Wulf Carlevaro", "Aaron Dreschner", "Kumar Dahl", "Eugenio Mataracı", "Ferran Simen",
  "Xavier Hayasaka", "Luis Moray", "Marcos Rudaski"
]

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'nl', label: 'Dutch' },
  { value: 'ru', label: 'Russian' },
  { value: 'tr', label: 'Turkish' }
]

const emotions = [
  'cheerful', 'excited', 'neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'
]

const isDisabled = computed(() => !text.value.trim())

const generateSpeech = useDebounceFn(async () => {
  if (isDisabled.value) return

  const response = await ai.audio.speech.create({
    text: text.value,
    // @ts-ignore
    voice: voice.value,
    speed: speed.value,
    language: language.value,
    emotion: emotion.value
})
    const audioStream = await response.arrayBuffer()
    const context = new AudioContext()
    const audioBuffer = await context.decodeAudioData(audioStream)
    const audioSource = context.createBufferSource()
    audioSource.buffer = audioBuffer
    audioSource.connect(context.destination)
    audioSource.start()
    audioSource.onended = () => {
      isPlaying.value = false
    }
  }, 300)

const playAudio = () => {
  if (isPlaying.value) {
    audioSrc.value = ''
    isPlaying.value = false
  } else {
    generateSpeech()
    isPlaying.value = true
  }
}


const getEmotionIcon = (emotion: string) => {
  const icons = {
    cheerful: 'mdi:emoticon-happy-outline',
    excited: 'mdi:emoticon-excited-outline',
    neutral: 'mdi:emoticon-neutral-outline',
    happy: 'mdi:emoticon-happy-outline',
    sad: 'mdi:emoticon-sad-outline',
    angry: 'mdi:emoticon-angry-outline',
    fearful: 'mdi:emoticon-frown-outline',
    disgusted: 'mdi:emoticon-poop-outline',
    surprised: 'mdi:emoticon-outline'
  }
  // @ts-ignore
  return icons[emotion] || 'mdi:emoticon-neutral-outline'
}
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-primary to-secondary overflow-hidden">
    <div class="w-full max-w-3xl p-8 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-tr from-accent/20 to-warning/20 animate-pulse"></div>
      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-6 text-center text-accent animate-pulse">
          AI Text-to-Speech Synthesizer
        </h2>
        <div class="mb-6">
          <textarea
            v-model="text"
            placeholder="Enter your text here..."
            class="w-full h-32 p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-secondary/30 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-accent placeholder-accent/50"
            @keydown.enter="playAudio"
          ></textarea>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label class="block text-sm font-medium text-accent mb-2">Voice</label>
            <select
              v-model="voice"
              class="w-full p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-secondary/30 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-accent"
            >
              <option v-for="speaker in speakers" :key="speaker" :value="speaker">
                {{ speaker }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-accent mb-2">Language</label>
            <select
              v-model="language"
              class="w-full p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-secondary/30 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-accent"
             
            >
              <option v-for="lang in languages" :key="lang.value" :value="lang.value">
                {{ lang.label }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-accent mb-2">Emotion</label>
            <select
              v-model="emotion"
              class="w-full p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-secondary/30 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-accent"
            
            >
              <option v-for="emo in emotions" :key="emo" :value="emo">
                {{ emo.charAt(0).toUpperCase() + emo.slice(1) }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-accent mb-2">Speed</label>
            <input
              v-model="speed"
              type="range"
              min="0.25"
              max="4"
              step="0.25"
              class="w-full accent-accent"
         
            >
            <div class="text-center text-accent mt-1">{{ speed }}x</div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            @click="playAudio"
            :disabled="isDisabled"
            class="px-6 py-3 rounded-full bg-gradient-to-r from-accent to-success text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="{ 'animate-bounce': !isDisabled && !isPlaying }"
          >
            <Icon :icon="isPlaying ? 'mdi:pause-circle' : 'mdi:play-circle'" class="inline-block mr-2" />
            {{ isPlaying ? 'Pause' : 'Play' }}
          </button>
        </div>
      </div>
      <div class="absolute bottom-4 right-4 text-6xl opacity-20">
        <Icon :icon="getEmotionIcon(emotion)" />
      </div>
    </div>
  </div>
</template>