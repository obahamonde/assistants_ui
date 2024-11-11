<script setup lang="ts">
const routes = ref([
{ name: "Completions", icon: "mdi:text", to: "/completions" },
  { name: "Chat", icon: "mdi:chat", to: "/chat" },
  { name: "Images", icon: "mdi:image", to: "/images" },
  { name: "Speech", icon: "mdi:microphone", to: "/audio/speech" },
  { name: "Transcriptions", icon: "mdi:transcribe", to: "/audio/transcriptions" },
]);

const activeRoute = ref(routes.value[0].name);
const toolbar = ref<HTMLElement | null>(null);
const mouseX = ref(0);
const mouseY = ref(0);
const nearestIndex = ref(-1);

const setActiveRoute = (routeName: string) => {
  activeRoute.value = routeName;
};

const handleMouseMove = (event: MouseEvent) => {
  if (!toolbar.value) return;
  
  const rect = toolbar.value.getBoundingClientRect();
  mouseX.value = event.clientX - rect.left;
  mouseY.value = event.clientY - rect.top;
  
  // Update nearest index immediately
  updateNearestIndex();
};

const handleMouseLeave = () => {
  nearestIndex.value = -1;
};

const updateNearestIndex = () => {
  if (!toolbar.value) return;
  
  const itemWidth = toolbar.value.offsetWidth / routes.value.length;
  let minDistance = Infinity;
  let nearest = -1;

  routes.value.forEach((_, index) => {
    const itemCenter = (index + 0.5) * itemWidth;
    const distance = Math.abs(mouseX.value - itemCenter);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = index;
    }
  });

  // Only update if within activation range
  if (minDistance <= itemWidth * 0.8) {
    nearestIndex.value = nearest;
  } else {
    nearestIndex.value = -1;
  }
};

const getScale = (index: number) => {
  return index === nearestIndex.value ? 1.5 : 1;
};

const getTranslateY = (index: number) => {
  if (!toolbar.value) return 0;
  
  const itemWidth = toolbar.value.offsetWidth / routes.value.length;
  const itemCenter = (index + 0.5) * itemWidth;
  const distance = Math.abs(mouseX.value - itemCenter);
  const maxDistance = itemWidth * 1.5;
  
  if (distance > maxDistance) return 0;
  
  // Smoother translation curve
  const normalize = 1 - Math.min(distance / maxDistance, 1);
  const translate = Math.pow(normalize, 2) * -15;
  return translate;
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  toolbar.value?.addEventListener('mouseleave', handleMouseLeave);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  toolbar.value?.removeEventListener('mouseleave', handleMouseLeave);
});
</script>

<template>
  <div ref="toolbar" 
       class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-info to-warning backdrop-blur-lg shadow-lg z-50 opacity-0 hover:opacity-100 transition-all duration-300">
    <nav class="max-w-3xl mx-auto">
      <ul class="flex justify-around items-center gap-8">
        <li v-for="(route, index) in routes" 
            :key="route.name" 
            class="relative bg-accent rounded-xl shadow-md w-24 list-none"
            :style="{
              transform: `scale(${getScale(index)}) translateY(${getTranslateY(index)}px)`,
              zIndex: index === nearestIndex ? 2 : 1,
              transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }">
          <RouterLink
            :to="route.to"
            @click="setActiveRoute(route.name)"
            class="flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-white/20 group"
            :class="{ 'bg-white/10': activeRoute === route.name }"
          >
            <div class="relative">
              <Icon 
                :icon="route.icon" 
                class="text-3xl text-white transition-transform duration-300"
                :class="{ 'scale-110': activeRoute === route.name }"
              />
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

li {
  transform-origin: bottom center;
  will-change: transform;
}
</style>