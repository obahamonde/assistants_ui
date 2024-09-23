<script setup lang="ts">
import type { User } from "@auth0/auth0-vue";
import { ref } from 'vue';
const props = defineProps<{ user: User, logout: () => void }>();
const routes = ref([
  { name: "Chat", icon: "mdi:chat", to: `/chat/${props.user.sub}` },
  { name: "Images", icon: "mdi:image", to: "/images" },
  { name: "Speech", icon: "mdi:microphone", to: "/audio/speech" },
  { name: "Transcriptions", icon: "mdi:text-to-speech", to: "/audio/transcriptions" },
]);

const activeRoute = ref(routes.value[0].name);

const setActiveRoute = (routeName: string) => {
  activeRoute.value = routeName;
};
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-info to-warning backdrop-blur-lg shadow-lg z-50">
    <nav class="max-w-3xl mx-auto">
      <ul class="flex justify-around items-center">
        <li v-for="route in routes" :key="route.name" class="relative bg-accent rounded-xl shadow-md w-24 list-none">
          <RouterLink
            :to="route.to"
            @click="setActiveRoute(route.name)"
            class="flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-white/20 group"
            :class="{ 'bg-white/10': activeRoute === route.name }"
          >
            <div class="relative">
              <Icon :icon="route.icon" class="text-3xl text-white transition-all duration-300 group-hover:scale-110" />
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full transform scale-0 transition-all duration-300 group-hover:scale-100"></div>
            </div>
            <span class="mt-1 text-xs font-medium text-white opacity-80 group-hover:opacity-100">{{ route.name }}</span>
          </RouterLink>
          <div v-if="activeRoute === route.name"
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-warning animate-pulse"
          ></div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

.group:hover .text-3xl {
  animation: float 2s ease-in-out infinite;
}
.router-link-active {
  background-color: #000;
}
</style>