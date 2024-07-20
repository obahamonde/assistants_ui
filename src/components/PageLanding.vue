<script setup lang="ts">
const props = defineProps<{
	login: () => void;
}>();
const cards = ref([
  {
    title: "Quipubase",
    description: "A knowledge database focused on user productivity.",
    image: "/favicon.svg",
    content: "Quipubase is our cutting-edge knowledge database designed to enhance user productivity. It offers advanced organization, quick retrieval, and seamless integration with your existing workflows."
  },
  {
    title: "IndieCloud",
    description: "An AI-based set of tools built on top of our cutting-edge Document Vector Database: Quipubase.",
    image: "/svg/llama3-8b-8192.svg",
    content: "IndieCloud leverages the power of Quipubase to provide a suite of AI-driven tools. These tools assist in data analysis, content creation, and decision-making processes, revolutionizing how you interact with your information."
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your workflow.",
    image: "/logo.png",
    content: "Our AI integration feature allows you to harness the power of artificial intelligence within your existing systems. From automated data processing to intelligent recommendations, AI becomes an integral part of your productivity ecosystem."
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security to protect your valuable information.",
    image: "/globant.svg",
    content: "We prioritize the safety of your data with enterprise-grade security measures. Our multi-layered approach includes encryption, access controls, and regular security audits to ensure your information remains protected at all times."
  },
]);

const selectedCard = ref(null);
const isModalOpen = ref(false);

const openModal = (card) => {
  selectedCard.value = card;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <section class="col center w-screen h-full srelative overflow-hidden bg-dark">
    <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary animate-gradient"></div>
    <div class="max-w-6xl w-full relative z-10">
      <h1 class="text-6xl font-bold text-center mb-4 animate-gradient-text title-fonts">IndieCloud</h1>

      <img src="/globant.svg" alt="IndieCloud Logo" class="h-12 mx-auto my-4" />
      <h2 class="text-2xl text-center text-accent mb-12 font-sans">Revolutionizing productivity with AI-powered tools</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="card in cards" :key="card.title" class="bg-accent rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 slide-up sh-xl">
          <div class="p-4">
            <img :src="card.image" :alt="card.title" class="w-12 h-12 scale-150 mx-auto my-2"/>
          </div>
          <div class="px-6 py-4">
            <div class="card-title text-light">{{ card.title }}</div>
            <p class="text-body text-light">{{ card.description }}</p>
            <button @click="openModal(card)" class="btn-del mt-4">Learn More</button>
          </div>
        </div>
      </div>
<button class="btn-put text-black mb-12 mt-8 scale-150"
@click="props.login"
>Get Started</button>
    </div>

    <!-- Modal Component -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-dark p-8 rounded-lg sh-2xl max-w-2xl w-full">
        <h2 class="text-2xl font-bold mb-4 text-light">{{ selectedCard.title }}</h2>
        <p class="text-light mb-6">{{ selectedCard.content }}</p>
        <button @click="closeModal" class="btn-del">Close</button>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientAnimation 10s ease infinite;
}

.animate-gradient-text {
  background: linear-gradient(45deg, #3b64a2, #5f8a87, #925dbd, #7ac3e5);
  background-size: 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 10s ease infinite;
}
.title-font {
  font-family: 'Poppins', sans-serif;
}
</style>