<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { QuipuBase } from "~/composables/quipubase";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
const { modelValue } = defineModels<{
  modelValue: string;
}>();
const props = defineProps<{
  namespace: string;
}>();
const db = new QuipuBase("chat",props.namespace)
const editor = useEditor({
  extensions: [
    StarterKit,
    Link.configure({ openOnClick: true }),
    Image.configure(),
  ],
  content: modelValue.value,
});
const isTyping = ref(false);

const onTab = (e: KeyboardEvent) => {
  e.preventDefault();
  if (!editor.value) return;
  editor.value.chain().insertContent("    ").run();
};
const autoComplete = async () => {
  if (!editor.value) return;
  const context = editor.value.getText();
  isTyping.value = true;
  await db.chat({key:"completions",messages:[{content:context,role:"user"}],model:"llama3-70b-8192",instruction:"You are an autocompletion Chatbot, help the user automate his job by writing the next paragraph don't add any prior or further content, just the autocompletion"},(response)=>{
    editor.value?.commands.setContent(editor.value?.getHTML() + response);},false)
};
const handleKeyDown = async (e: KeyboardEvent) => {
  if (!editor.value) return;

  if (e.ctrlKey && e.key === "Enter") {
    e.preventDefault();
    await autoComplete();
  }
};

onMounted(() => {
  editor.value?.commands.setContent(modelValue.value);
  editor.value?.commands.focus();
});

onUnmounted(() => {
  editor.value?.destroy();
});
</script>
<template>
  <div class="w-full">
    <nav
      class="row center bg-black rounded sh p-2  text-white gap-4 px-4"
      v-if="editor"
    >
      <Icon
        icon="mdi-format-bold"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleBold().run()"
      />
      <Icon
        icon="mdi-format-italic"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleItalic().run()"
      />
      <Icon
        icon="mdi-format-strikethrough-variant"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleStrike().run()"
      />
      <Icon
        icon="mdi-format-quote-close"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleBlockquote().run()"
      />
      <Icon
        icon="mdi-format-list-bulleted"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleBulletList().run()"
      />
      <Icon
        icon="mdi-format-list-numbered"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleOrderedList().run()"
      />
      <Icon
        icon="mdi-code-braces"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleCodeBlock().run()"
      />
      <Icon
        icon="mdi-format-header-1"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleHeading({ level: 1 }).run()"
      />
      <Icon
        icon="mdi-format-header-2"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleHeading({ level: 2 }).run()"
      />
      <Icon
        icon="mdi-format-header-3"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleHeading({ level: 3 }).run()"
      />
      <Icon
        icon="mdi-format-header-4"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleHeading({ level: 4 }).run()"
      />
      <Icon
        icon="mdi-format-header-5"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleHeading({ level: 5 }).run()"
      />
      <Icon
        icon="mdi-format-header-6"
        class="x2 p-1 text-gray-500 z-50 cp scale"
        @click="editor.chain().toggleHeading({ level: 6 }).run()"
      />
      <img
        src="/favicon.svg"
        class="rounded-full w-8 h-8 cp scale"
        :class="isTyping ? 'animate-bounce' : ''"
        @click="autoComplete()"
      />
    </nav>
    <EditorContent
      class="tiptap bg-transparent h-full p-2 rounded no-outline markdown-body"
      :editor="editor"
      @keydown.tab="onTab"
      @keydown="handleKeyDown"
      v-model:modelValue="modelValue"
    />
  </div>
</template>
<style lang="scss">
/* Basic editor styles */
.tiptap {
  > * + * {
    margin-top: 0.75em;
    @apply outline-none;
    @apply bg-white;
    @apply typewriter;
  }

  img {
    max-width: 20%;
  }

  div {
    @apply bg-white;
    @apply outline-none;
    @apply rounded sh;
    @apply markdown-body;
    @apply min-h-128;
    @apply p-4;
  }
}
</style>