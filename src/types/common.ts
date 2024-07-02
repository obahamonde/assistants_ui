export type Notification = {
  status: string;
  message: string;
};

export type User = {
  email: string | undefined;
  email_verified: boolean | undefined;
  family_name: string | undefined;
  given_name: string | undefined;
  locale: string | undefined;
  name: string;
  nickname: string | undefined;
  picture: string | undefined;
  sub: string;
  updated_at: string | undefined;
};

export type Message = {
  content: string;
  role: "user" | "assistant" | "system";
  type?: "image" | "audio";
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

export type CosimResult = {
  id: string;
  content: string;
  score: number;
};
