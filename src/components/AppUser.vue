<script setup lang="ts">
import type { User } from "@auth0/auth0-vue";
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  user: User;
  logout: () => void;
}>();

const isHovered = ref(false);

const getInitials = computed(() => {
  const name = props.user.name || props.user.nickname || props.user.email || "";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});

const toggleHover = () => {
  isHovered.value = !isHovered.value;
};
</script>
<template>
  <div
    class="flex justify-center items-center min-h-screen p-8 bg-gradient-to-br from-primary to-secondary overflow-hidden"
  >
    <div
      class="w-full max-w-md p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden"
      @mouseenter="toggleHover"
      @mouseleave="toggleHover"
    >
      <div
        class="absolute inset-0 bg-gradient-to-tr from-accent/20 to-warning/20 animate-pulse"
      ></div>
      <div class="relative z-10">
        <div class="flex items-center mb-6">
          <div
            v-if="props.user.picture"
            class="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-accent shadow-md"
          >
            <img
              :src="props.user.picture"
              :alt="props.user.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            v-else
            class="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-accent shadow-md bg-secondary flex items-center justify-center text-2xl font-bold text-accent"
          >
            {{ getInitials }}
          </div>
          <div>
            <h2 class="text-2xl font-bold text-accent">
              {{ props.user.name || props.user.nickname }}
            </h2>
            <p class="text-sm text-secondary">{{ props.user.email }}</p>
          </div>
        </div>
        <div class="space-y-4">
          <div
            v-if="props.user.email_verified"
            class="flex items-center text-success"
          >
            <Icon icon="mdi:check-circle" class="mr-2" />
            <span>Email verified</span>
          </div>
          <div v-else class="flex items-center text-error">
            <Icon icon="mdi:alert-circle" class="mr-2" />
            <span>Email not verified</span>
          </div>
          <div class="flex items-center text-info">
            <Icon icon="mdi:clock-outline" class="mr-2" />
            <span
              >Last login:
              {{ new Date(props.user.updated_at!).toLocaleString() }}</span
            >
          </div>
        </div>
        <button
          @click="props.logout"
          class="mt-6 w-full px-6 py-3 rounded-full bg-gradient-to-r from-accent to-error text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <Icon icon="mdi:logout" class="mr-2" />
          Logout
        </button>
      </div>
      <div
        class="absolute bottom-4 right-4 text-6xl opacity-20 transition-transform duration-300"
        :class="{ 'transform rotate-12': isHovered }"
      >
        <Icon icon="mdi:account-circle-outline" />
      </div>
    </div>
  </div>
</template>
