import { useSpeechRecognition } from "@vueuse/core"; // Assuming useSpeechRecognition is from @vueuse/core

export const useSpeech = () => {
  const BASE_URL = "https://voice.indiecloud.co";
  const speech = useSpeechRecognition({
    continuous: true,
  });

  const SpeechGrammarList =
    // @ts-ignore
    window.SpeechGrammarList || window.webkitSpeechGrammarList;
  const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(1);
  speech.recognition!.grammars = speechRecognitionList;
  const { isListening, result } = speech;

  const fetchVoice = async (
    text: string,
    lang: "en" | "es",
    gender: "male" | "female"
  ): Promise<void> => {
    const body = JSON.stringify({
      text,
      lang,
      gender,
    });
    const response = await fetch(`/voiceapi/generate`, {
      method: "PATCH",
      body,
      headers: {
        "Content-Type": "application/json",
        "accept": "audio/wav",
      },




    });
    const ctx = new AudioContext();
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ctx.destination);
    source.start();
  }
    ;

  const cloneVoice = async (name: string, lang: "en" | "es", file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("lang", lang);
    const response = await fetch(`${BASE_URL}/voiceapi/generate?${params.toString()}`, {
      method: "POST",
      body: formData,
    });
    const buffer = await response.arrayBuffer();
    if (!buffer) return;
    const blobAudio = new Blob([buffer], { type: "audio/mp3" });
    const audioUrl = URL.createObjectURL(blobAudio);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return {
    isListening,
    result,
    speech,
    fetchVoice,
    cloneVoice
  };
};
