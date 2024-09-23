<script setup lang="ts">
import { OpenAI } from "openai";
const { state } = useStore();

const client = new OpenAI({
  baseURL: "https://indiecloud.co/v1",
  apiKey: "sk-proj-1234567890",
  dangerouslyAllowBrowser: true,
});

const useChat = async (content: string) => {
  state.current.messages.push({ role: "user", content });
  const response = await client.chat.completions.create({
    model: state.current.model,
    messages: state.current.messages,
  });
  const data = response.choices[0].message.content;

  if (data) {
    state.current.messages.push({ role: "assistant", content: data });
  }
};
</script>
<template>
  <AppInput @send="useChat" />
</template>
