import "reflect-metadata";
import { Chat } from "~/types";
const DOMAIN = "indiecloud.co";

type Action = "put" | "get" | "merge" | "delete" | "find";

type JsonSchema = {
  type: string;
  title?: string;
  description?: string;
  items?: JsonSchema;
  required?: string[];
  properties?: {
    [key: string]: JsonSchema;
  };
};

type Status = {
  code: number;
  message: string;
  key: string;
  definition: JsonSchema;
};

type RagRequest = {
  content: string | string[];
};

type CosimResult = {
  score: number;
  content: string;
  id: string;
};

const isObject = (value: any): value is object => {
  return value && typeof value === "object" && !Array.isArray(value);
};

const useStream = async <T>(
  url: string,
  data: T,
  callback: (data: string) => any,
  options?: RequestInit,
): Promise<void> => {
  const response = await fetch(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.body) {
    throw new Error("No response body");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    let lines = buffer.split("\n");

    for (let i = 0; i < lines.length - 1; i++) {
      const line = lines[i].trim();
      if (line && line !== "[DONE]") {
        callback(line + "\n");
      }
    }

    buffer = lines[lines.length - 1];
  }

  if (buffer) {
    const line = buffer.replace(/^data: /, "").trim();
    if (line && line !== "[DONE]") {
      callback(line + "\n");
    }
  }
};

function jsonSchemaGenerator(typeName: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const jsonSchema: JsonSchema = {
      title: `${typeName}::${target.namespace}`,
      type: "object",
      properties: {},
      required: [],
    };

    const generateSchema = (value: any): JsonSchema => {
      if (Array.isArray(value)) {
        // @ts-ignore
        return {
          type: "array",
          items: generateSchema(value[0]),
        };
      } else if (isObject(value)) {
        const nestedSchema: JsonSchema = {
          title: Object.keys(value)[0],
          type: "object",
          properties: {},
          required: [],
        };
        for (const key in value) {
          // @ts-ignore
          nestedSchema.properties[key] = generateSchema(value[key]);
          // @ts-ignore
          if (value[key] !== null) {
            nestedSchema.required!.push(key);
          }
        }
        return nestedSchema;
      } else {
        // @ts-ignore
        //  Handle Generic Types
        if (typeof value === "object") {
          return {
            type: "object",
            properties: {},
            required: [],
          };
        } else {
          return {
            type: typeof value,
          };
        }
      }
    };

    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      const keys = Object.keys(result);

      keys.forEach((key) => {
        jsonSchema.properties![key] = generateSchema(result[key]);
        if (result[key] !== null) {
          jsonSchema.required!.push(key);
        }
      });

      return jsonSchema;
    };
  };
}

interface IQuipuBase<T> {
  namespace: string;
  data?: T;
  key?: string;
  limit?: number;
  offset?: number;
  dbUrl(action: Action, key?: string, limit?: number, offset?: number): string;
  fetch(
    action: Action,
    data?: T,
    key?: string,
    limit?: number,
    offset?: number,
  ): Promise<Status | T | T[]>;
  getJsonSchema<T>(data: T): JsonSchema;
}

type Document<T> = {
  namespace: string;
  action: Action;
  data?: T;
  key?: string;
  limit?: number;
  offset?: number;
};

class QuipuBase<T> implements IQuipuBase<T> {
  constructor(
    public service: "db" | "chat" | "voice" | "transcribe",
    public namespace: string,
  ) {}

  @jsonSchemaGenerator("data")
  getJsonSchema<T>(data: T): JsonSchema {
    return data as unknown as JsonSchema;
  }

  async fetch(
    action: Action,
    data?: T | Partial<T>,
    key?: string,
    limit?: number,
    offset?: number,
  ): Promise<Status | T | T[]> {
    const url = this.dbUrl(action, key, limit, offset);
    const definition = this.getJsonSchema(data);
    const writeOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, definition }),
    };
    const readOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ definition }),
    };
    const payload = data as Partial<T>;
    const alterOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: payload, definition }),
    };
    let response = new Response();
    switch (action) {
      case "put":
        response = await fetch(url, writeOptions);
        return (await response.json()) as T;
      case "find":
      case "merge":
        response = await fetch(url, alterOptions);
        return (await response.json()) as T[];
      case "get":
        response = await fetch(url, readOptions);
        return (await response.json()) as T;
      case "delete":
        response = await fetch(url, readOptions);
        return (await response.json()) as Status;
      default:
        throw new Error("Invalid action");
    }
  }

  dbUrl(action: Action, key?: string, limit?: number, offset?: number): string {
    const params = new URLSearchParams();
    params.set("action", action);
    if (key) params.set("key", key);
    if (limit) params.set("limit", limit.toString());
    if (offset) params.set("offset", offset.toString());
    const baseUrl = `https://${this.service}.${DOMAIN}`;
    return `${baseUrl}/api/documents/${this.namespace}?${params.toString()}`;
  }

  async put(data: T): Promise<T> {
    return (await this.fetch("put", data)) as T;
  }
  async merge(data: Partial<T>): Promise<T[]> {
    return (await this.fetch("merge", data)) as T[];
  }
  async delete(key: string): Promise<Status> {
    return (await this.fetch("delete", {}, key)) as Status;
  }
  async find(data: Partial<T>, limit: number, offset: number): Promise<T[]> {
    return (await this.fetch("find", data, undefined, limit, offset)) as T[];
  }
  async get(key: string): Promise<T> {
    return (await this.fetch("get", {}, key)) as T;
  }
  async query(data: RagRequest, topK: number): Promise<CosimResult[]> {
    const url = `${DOMAIN}/api/vector/${this.namespace}?topK=${topK}&action=query`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return (await response.json()) as CosimResult[];
  }
  async upsert(data: RagRequest) {
    const url = `${DOMAIN}/api/vector/${this.namespace}?action=upsert`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return (await response.json()) as Status;
  }
  async chat(chat: Chat, callback: (data: string) => any, useTools: boolean) {
    const url = `https://chat.${DOMAIN}/api/chat/${this.namespace}?useTools=${useTools}`;
    await useStream<Chat>(url, chat, callback);
  }
}

export type { Document, Status, JsonSchema, Action };

export { QuipuBase, useStream };
