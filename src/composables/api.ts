import { OpenAI } from "openai";
import {
  ChatCompletionCreateParams,
  ChatCompletionMessage,
  ChatCompletionMessageParam,
} from "openai/resources";
import { MessageCreateParams } from "openai/resources/beta/threads/messages";
import { Message } from "openai/resources/beta/threads/messages";
import {
  VectorStore,
  VectorStoreCreateParams,
} from "openai/resources/beta/vector-stores/vector-stores";
import { VectorStoreFile } from "openai/resources/beta/vector-stores/files";

const openai = new OpenAI({
  baseURL: "https://indiecloud.co/v1",
  apiKey: "[EMPTY]",
});

export const useOpenAI = () => {
  const getMessages = async (threadId: string) => {
    const response = await openai.beta.threads.messages.list(threadId);
    return response.data;
  };

  const createMessage = async (
    threadId: string,
    params: MessageCreateParams,
  ) => {
    const response = await openai.beta.threads.messages.create(
      threadId,
      params,
    );
    return response;
  };

  const getVectorStores = async () => {
    const response = await openai.beta.vectorStores.list();
    return response.data;
  };

  const createVectorStore = async (params: VectorStoreCreateParams) => {
    const response = await openai.beta.vectorStores.create(params);
    return response;
  };

  const getVectorStoreFiles = async (vectorStoreId: string) => {
    const response = await openai.beta.vectorStores.files.list(vectorStoreId);
    return response.data;
  };

  const createVectorStoreFile = async (
    vectorStoreId: string,
    file_id: string,
  ) => {
    return await openai.beta.vectorStores.files.create(vectorStoreId, {
      file_id,
    });
  };

  const chatCompletion = async (
    messages: ChatCompletionMessageParam[],
    model: string,
  ) => {
    const response = await openai.chat.completions.create({
      messages,
      model,
      stream: false,
    });
    return response.choices[0].message;
  };

  return {
    getMessages,
    createMessage,
    getVectorStores,
    createVectorStore,
    getVectorStoreFiles,
    createVectorStoreFile,
    chatCompletion,
  };
};
