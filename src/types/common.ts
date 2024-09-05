export type Notification = {
  status: string;
  message: string;
};

export type Message = {
  content: string;
  role: "user" | "assistant" | "system";
};

export type Chat = {
  key: string;
  messages: Message[];
  model:
    | "llama3-70b-8192"
    | "llama3-8b-8192"
    | "mixtral-8x7b-32768"
    | "gemma-7b-it";
  instruction: string;
};

type SpeakerName =
  | "Claribel Dervla"
  | "Daisy Studious"
  | "Gracie Wise"
  | "Tammie Ema"
  | "Alison Dietlinde"
  | "Ana Florence"
  | "Annmarie Nele"
  | "Asya Anara"
  | "Brenda Stern"
  | "Gitta Nikolina"
  | "Henriette Usha"
  | "Sofia Hellen"
  | "Tammy Grit"
  | "Tanja Adelina"
  | "Vjollca Johnnie"
  | "Andrew Chipper"
  | "Badr Odhiambo"
  | "Dionisio Schuyler"
  | "Royston Min"
  | "Viktor Eka"
  | "Abrahan Mack"
  | "Adde Michal"
  | "Baldur Sanjin"
  | "Craig Gutsy"
  | "Damien Black"
  | "Gilberto Mathias"
  | "Ilkin Urbano"
  | "Kazuhiko Atallah"
  | "Ludvig Milivoj"
  | "Suad Qasim"
  | "Torcull Diarmuid"
  | "Viktor Menelaos"
  | "Zacharie Aimilios"
  | "Nova Hogarth"
  | "Maja Ruoho"
  | "Uta Obando"
  | "Lidiya Szekeres"
  | "Chandra MacFarland"
  | "Szofi Granger"
  | "Camilla Holmström"
  | "Lilya Stainthorpe"
  | "Zofija Kendrick"
  | "Narelle Moon"
  | "Barbora MacLean"
  | "Alexandra Hisakawa"
  | "Alma María"
  | "Rosemary Okafor"
  | "Ige Behringer"
  | "Filip Traverse"
  | "Damjan Chapman"
  | "Wulf Carlevaro"
  | "Aaron Dreschner"
  | "Kumar Dahl"
  | "Eugenio Mataracı"
  | "Ferran Simen"
  | "Xavier Hayasaka"
  | "Luis Moray"
  | "Marcos Rudaski";

type SpeakerLanguage = "en" | "es";
type AudioFormat = "mp3" | "wav" | "ogg" | "flac";
type SpeakerEmotion =
  | "cheerful"
  | "excited"
  | "neutral"
  | "happy"
  | "sad"
  | "angry"
  | "fearful"
  | "disgusted"
  | "surprised";

export type SpeechRequest = {
  model: "xtts";
  input: string;
  voice: SpeakerName;
  voice_id?: string;
  response_format: AudioFormat;
  speed: number;
  language: SpeakerLanguage;
  emotion: SpeakerEmotion;
  speaker: string; // Computed property
};

export type CosimResult = {
  id: string;
  content: string;
  score: number;
  file_id: string;
};
