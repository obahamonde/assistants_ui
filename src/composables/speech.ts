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

  const chunkText = (text: string, maxTokens: number = 239) => {
    const separators = /[.?!]/;
    const chunks: string[] = [];
    let currentChunk = "";

    text.split(separators).forEach((segment) => {
      if ((currentChunk + segment).length > maxTokens) {
        chunks.push(currentChunk.trim());
        currentChunk = segment + ".";
      } else {
        currentChunk += segment + ".";
      }
    });

    if (currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
    }

    return chunks;
  };

  const fetchVoice = async (
    text: string,
    lang: "en" | "es",
    gender: "male" | "female",
  ): Promise<HTMLAudioElement> => {
    const body = JSON.stringify({
      text: text,
      lang: lang,
      gender: gender,
    });
    const { data: response } = await useFetch(`${BASE_URL}/api/generate`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).blob();
    if (!response.value) throw new Error("No response from server");
    const blobAudio = new Blob([response.value], { type: "audio/mp3" });
    const audioUrl = URL.createObjectURL(blobAudio);
    const audio = new Audio(audioUrl);
    return audio;
  };

  const cloneVoice = async (name: string, lang: "en" | "es", file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("lang", lang);
    const { data: response } = await useFetch(
      `${BASE_URL}/api/generate${params.toString()}`,
      {
        method: "POST",
        body: formData,
      },
    ).blob();
    if (!response.value) return;
    const blobAudio = new Blob([response.value], { type: "audio/mp3" });
    const audioUrl = URL.createObjectURL(blobAudio);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return {
    isListening,
    result,
    speech,
    fetchVoice,
    cloneVoice,
    chunkText,
  };
};
