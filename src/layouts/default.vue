<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted, onUnmounted, ref } from "vue";

const { state } = useStore();
const { logout } = useAuth0();
const showToolBar = ref(false); // Initially hide the toolbar

const handleMouseMove = (event: MouseEvent) => {
  const threshold = 100; // pixels from bottom
  showToolBar.value = window.innerHeight - event.clientY <= threshold;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <main class="flex flex-row justify-center w-screen min-h-screen h-full overflow-auto" v-if="state.user">
    <SideBar :namespace="state.user.sub!" :logout="logout" v-if="state.user" />
    <RouterView />
    <transition name="apple-slide">
      <ToolBar
        v-if="showToolBar"
        :user="state.user"
        class="z-50 fixed bottom-0 left-0 right-0 slide-in-bottom ease-in-out 1s dock"
      />
    </transition>
    <Artifacts :namespace="state.user.sub!" v-if="state.user" />
  </main>
</template>

<style scoped>
.apple-slide-enter-active,
.apple-slide-leave-active {
  @apply transition-transform transition-opacity duration-500 ease;
}

.apple-slide-enter-from {
  @apply translate-y-full scale-90 opacity-0 ease-in-out 1s;
}

.apple-slide-enter-to {
  @apply translate-y-0 scale-100 opacity-100 ease-in-out 1s;
}

.apple-slide-leave-from {
  @apply translate-y-0 scale-100 opacity-100 ease-in-out 1s;
}

.apple-slide-leave-to {
  @apply translate-y-full scale-90 opacity-0 ease-in-out 1s;
}

.dock {
  @apply flex justify-center items-center p-2.5 bg-white bg-opacity-80 shadow-md rounded-lg backdrop-blur transition-transform duration-300 ease;
}

.dock:hover {
  @apply scale-110;
}
</style>
