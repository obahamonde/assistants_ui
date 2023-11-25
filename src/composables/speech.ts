export const useSpeech = () => {
	const speech = useSpeechRecognition({
		continuous: true,
	});
	const SpeechGrammarList =
		window.SpeechGrammarList || window.webkitSpeechGrammarList;
	const speechRecognitionList = new SpeechGrammarList();
	speechRecognitionList.addFromString(1);
	speech.recognition!.grammars = speechRecognitionList;
	const { isListening, result } = speech;

	const fetchVoice = async (text: string, endpoint: string) => {
		const { data: response } = await useFetch(`${endpoint}${text}`, {
			method: "GET",
		}).blob();
		if (!response.value) return;
		const blobAudio = new Blob([response.value], { type: "audio/mp3" });
		const audioUrl = URL.createObjectURL(blobAudio);
		const audio = new Audio(audioUrl);
		audio.play()
	};

	return {
		isListening,
		result,
		speech,
		fetchVoice,
	};
};