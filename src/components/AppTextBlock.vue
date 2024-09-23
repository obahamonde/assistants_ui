<script setup lang="ts">
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
});
const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str: any, lang: any): any => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs" ><code >' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});
</script>
<template>
  <div
    class="markdown-body bg-gray-500 text-white rounded sh w-full p-4"
    v-html="md.render(props.content)"
  ></div>
</template>
