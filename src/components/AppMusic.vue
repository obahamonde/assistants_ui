<script setup lang="ts">
import { OpenAI } from "openai";

const url = "https://music.indiecloud.co/v1/music/generations";
const ai = new OpenAI({
  baseURL: "https://indiecloud.co/v1",
  apiKey: "sk-proj-1234567890",
  dangerouslyAllowBrowser: true,
});

type JobRequest = {
  prompt: string;
  type: "unconditional" | "conditional" | "continuation";
  previous: string;
};

type JobResponse = {
  url: string;
};

type JobState = {
  isGenerating: boolean;
  audioUrl: string;
  allUrls: string[];
  error: string | null;
};

const canvasRef = ref<HTMLCanvasElement | null>(null);
const audioContext = ref<AudioContext | null>(null);
const analyser = ref<AnalyserNode | null>(null);
const source = ref<AudioBufferSourceNode | null>(null);
const audioBuffer = ref<AudioBuffer | null>(null);

const jobState = reactive<JobState>({
  isGenerating: false,
  audioUrl: "",
  allUrls: [],
  error: null,
});


const jsonData = reactive<JobRequest>({
  prompt: "",
  previous: "",
  type: "unconditional",
});

watch(jsonData, (data) => {
  if (data.prompt && data.prompt.length) {
    jsonData.type = "conditional";
  }
});

watch(jsonData, (data) => {
  if (data.previous && data.previous.length) {
    jsonData.type = "continuation";
  }
});

const autoComplete = async () => {
  try {
    const completion = await ai.completions.create({
      model: "mixtral-8x7b-32768",
      prompt: jsonData.prompt,
      max_tokens: 512,
    });
    const text = completion.choices[0].text;
    if (text) {
      jsonData.prompt += text;
    }
  } catch (error) {
    console.error("Error during auto-complete:", error);
    jobState.error = "Failed to auto-complete prompt. Please try again.";
  }
};

const generateMusic = async () => {
  jobState.isGenerating = true;
  jobState.error = null;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as JobResponse;
    jobState.audioUrl = data.url;
    jobState.allUrls.push(data.url);
    await fetchAudioData(data.url);
  } catch (error) {
    console.error("Error generating music:", error);
    jobState.error = "Failed to generate music. Please try again.";
  } finally {
    jobState.isGenerating = false;
  }
};

const setupAudioContext = () => {
  if (!audioContext.value) {
    audioContext.value = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    analyser.value = audioContext.value.createAnalyser();
  }
};

const fetchAudioData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer.value = await audioContext.value!.decodeAudioData(arrayBuffer);
  } catch (error) {
    console.error("Error fetching audio data:", error);
    jobState.error = "Failed to load audio. Please try again.";
  }
};

const playMusic = async () => {
  if (!audioBuffer.value || !audioContext.value || !analyser.value) return;

  if (source.value) {
    source.value.stop();
    source.value.disconnect();
  }

  source.value = audioContext.value.createBufferSource();
  source.value.buffer = audioBuffer.value;
  source.value.connect(analyser.value);
  analyser.value.connect(audioContext.value.destination);
  source.value.start(0);

  drawWaveform();
};

const pauseMusic = () => {
  if (audioContext.value) {
    audioContext.value.suspend();
  }
};

const stopMusic = () => {
  if (source.value) {
    source.value.stop();
  }
  if (audioContext.value) {
    audioContext.value.suspend();
  }
  audioContext.value = null;
  analyser.value = null;
  source.value = null;
  audioBuffer.value = null;
};

const resumeMusic = () => {
  if (audioContext.value) {
    audioContext.value.resume();
  }
};

const drawWaveform = () => {
  if (!canvasRef.value || !analyser.value) return;

  const canvas = canvasRef.value;
  const canvasCtx = canvas.getContext("2d");
  if (!canvasCtx) return;

  const draw = () => {
    requestAnimationFrame(draw);

    const bufferLength = analyser.value!.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.value!.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = "rgba(200, 200, 200, 0.2)";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(255, 255, 255)";

    canvasCtx.beginPath();

    const sliceWidth = (canvas.width * 1.0) / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = (v * canvas.height) / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  };

  draw();
};

onMounted(() => {
  setupAudioContext();
});

onUnmounted(() => {
  if (source.value) {
    source.value.stop();
    source.value.disconnect();
  }
  if (audioContext.value) {
    audioContext.value.close();
  }
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 p-4"
  >
    <div
      class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-8 w-full max-w-md"
    >
      <h1 class="text-4xl font-bold mb-8 text-white text-center">
        AI Music Generator
      </h1>

      <textarea
        v-model="jsonData.prompt"
        class="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white placeholder-opacity-70"
        placeholder="Enter prompt for music generation"
        @keyup.ctrl.enter="autoComplete"
      />

      <button
        @click="generateMusic"
        class="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        :disabled="jobState.isGenerating"
      >
        {{ jobState.isGenerating ? "Generating..." : "Generate Music" }}
      </button>

      <div
        v-if="jobState.error"
        class="mt-4 p-3 bg-red-100 text-red-700 rounded-lg"
      >
        {{ jobState.error }}
      </div>

      <div v-if="jobState.audioUrl" class="mt-8">
        <canvas
          ref="canvasRef"
          class="w-full h-32 bg-white bg-opacity-20 rounded-lg mb-4"
        ></canvas>
        <div class="flex justify-between mt-4">
          <button
            @click="playMusic"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Play
          </button>
          <button
            @click="pauseMusic"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Pause
          </button>
          <button
            @click="stopMusic"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Stop
          </button>
          <button
            @click="resumeMusic"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Resume
          </button>
        </div>
      </div>

      <div v-if="jobState.allUrls.length > 0" class="mt-8">
        <h2 class="text-2xl font-semibold mb-4 text-white">Generated Tracks</h2>
        <ul class="space-y-2">
          <li v-for="(url, index) in jobState.allUrls" :key="index">
            <a
              :href="url"
              target="_blank"
              class="text-white hover:text-purple-200 hover:underline"
              >Track {{ index + 1 }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
