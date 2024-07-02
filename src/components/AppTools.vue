<script setup lang="ts">
import { Message, User } from '~/types';

const props = defineProps<{
	messages: Message[];
	modelPicture: string;
	user: User;
}>();
</script>
<template>
<div>
      <p v-for="message in props.messages" :key="message.content">
        <div v-if="message.role === 'assistant' || message.role === 'user'">
          <img
            :src="message.role === 'user' ? user.picture : `/svg/${props.modelPicture}.svg`"
            class="x2 rf sh"
            :class="message.role === 'user' ? 'float-right m-1' : 'float-left m-1'"
          />
          <div>
            <AppTextBlock :content="message.content" />
          </div>
        </div>
      </p>
    </div>

</template>