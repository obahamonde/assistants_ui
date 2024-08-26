<script setup lang="ts">
import { Message } from '~/types';
import { User } from '@auth0/auth0-vue';

const props = defineProps<{
	messages: Message[];
	modelPicture: string;
	user: User;
}>();
</script>
<template>
<div class="top-32 overflow-y-auto">
      <p v-for="message in props.messages" :key="message.content">
        <div v-if="message.role === 'assistant' || message.role === 'user'">
          <img
            :src="message.role === 'user' ? user.picture : `/svg/${props.modelPicture}.svg`"
            class="x2 rf sh"
            :class="message.role === 'user' ? 'float-right m-1' : 'float-left m-1'"
          />
          <div>
            <AppAudio :content="message.content" />
            <AppTextBlock :content="message.content" />
          </div>
        </div>
      </p>
    </div>

</template>