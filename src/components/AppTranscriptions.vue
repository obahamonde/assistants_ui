<script setup lang="ts">
import { OpenAI } from "openai";
import { computed, ref } from "vue";

const ai = new OpenAI({
  baseURL: "https://indiecloud.co/v1",
  apiKey: "[EMPTY]",
  dangerouslyAllowBrowser: true,
});

const isRecording = ref(false);
const transcription = ref("");
const mediaRecorder = ref<MediaRecorder | null>(null);
const audioChunks = ref<Blob[]>([]);
const uploadedFile = ref<File | null>(null);
const isTranscribing = ref(false);

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.value = new MediaRecorder(stream);

    mediaRecorder.value.ondataavailable = (event: BlobEvent) => {
      audioChunks.value.push(event.data);
    };

    mediaRecorder.value.onstop = async () => {
      const audioBlob = new Blob(audioChunks.value, { type: "audio/wav" });
      await transcribeAudio(audioBlob);
      audioChunks.value = [];
    };

    mediaRecorder.value.start();
    isRecording.value = true;
  } catch (error) {
    console.error("Error accessing microphone:", error);
  }
};

const stopRecording = () => {
  if (mediaRecorder.value && isRecording.value) {
    mediaRecorder.value.stop();
    isRecording.value = false;
  }
};

const transcribeAudio = async (audioBlob: Blob) => {
  try {
    const file = new File([audioBlob], "audio.wav", { type: "audio/wav" });
    const response = await ai.audio.transcriptions.create({
      model: "whisper-large-v3",
      file: file,
      response_format: "json",
      prompt: "You are a helpful assistant that transcribes audio to text.",
    });
    transcription.value = response.text;
  } catch (error) {
    console.error("Error transcribing audio:", error);
    transcription.value = "Error transcribing audio. Please try again.";
  }
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    uploadedFile.value = target.files[0];
  }
};

const transcribeUploadedFile = async () => {
  if (!uploadedFile.value) return;

  try {
    isTranscribing.value = true;
    const response = await ai.audio.transcriptions.create({
      model: "whisper-large-v3",
      file: uploadedFile.value,
      response_format: "json",
      prompt: "You are a helpful assistant that transcribes audio to text.",
    });
    transcription.value = response.text;
  } catch (error) {
    console.error("Error transcribing uploaded file:", error);
    transcription.value = "Error transcribing uploaded file. Please try again.";
  } finally {
    isTranscribing.value = false;
  }
};

onUnmounted(() => {
  if (mediaRecorder.value && isRecording.value) {
    mediaRecorder.value.stop();
  }
});

const isDisabled = computed(() => !uploadedFile.value && !isRecording.value);

const getRecordingIcon = () =>
  isRecording.value ? "mdi:stop-circle" : "mdi:record-circle";
const getUploadIcon = () => "mdi:upload";
const getTranscribeIcon = () =>
  isTranscribing.value ? "mdi:loading" : "mdi:text-to-speech";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-primary to-secondary overflow-auto w-full"
  >
    <div
      class="w-full max-w-3xl p-8 rounded-xl bg-warning backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-auto"
    >
      <div
        class="absolute inset-0 bg-gradient-to-tr from-accent to-warning animate-pulse"
      ></div>
      <div class="relative z-10">
        <h2
          class="text-4xl font-bold mb-6 text-center text-accent animate-pulse"
        >
          AI Audio Transcription
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            @click="isRecording ? stopRecording() : startRecording()"
            class="px-6 py-3 rounded-full bg-gradient-to-r from-accent to-success text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            :class="{ 'animate-pulse': isRecording }"
          >
            <Icon :icon="getRecordingIcon()" class="inline-block mr-2" />
            {{ isRecording ? "Stop Recording" : "Start Recording" }}
          </button>

          <div class="relative">
            <input
              type="file"
              accept="audio/*"
              @change="handleFileUpload"
              class="hidden"
              id="audioFileUpload"
            />
            <label
              for="audioFileUpload"
              class="px-6 py-3 rounded-full bg-gradient-to-r from-warning to-danger text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              <Icon :icon="getUploadIcon()" class="inline-block mr-2" />
              Upload Audio
            </label>
          </div>

          <button
            @click="transcribeUploadedFile"
            :disabled="isDisabled || isTranscribing"
            class="px-6 py-3 rounded-full bg-gradient-to-r from-info to-primary text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="{ 'animate-pulse': isTranscribing }"
          >
            <Icon :icon="getTranscribeIcon()" class="inline-block mr-2" />
            {{ isTranscribing ? "Transcribing..." : "Transcribe" }}
          </button>
        </div>

        <div v-if="uploadedFile" class="mb-4 text-sm text-accent">
          Selected file: {{ uploadedFile.name }}
        </div>

        <div
          v-if="transcription"
          class="w-full p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-secondary/30 transition-all duration-300 text-accent"
        >
          <h3 class="text-lg font-semibold mb-2">Transcription:</h3>
          <p>{{ transcription }}</p>
        </div>
      </div>
      <div class="absolute bottom-4 right-4 text-6xl opacity-20">
        <Icon icon="mdi:text-to-speech" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional custom styles here */
</style>
