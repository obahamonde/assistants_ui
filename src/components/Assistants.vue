<script setup lang="ts">
import type { FunctionDefinition, ToolFunction, Assistant } from "@/types";
const { request, response } = useRequest<FunctionDefinition[]>();

const funcs = ref<FunctionDefinition[]>([]);
const showModal = ref<boolean>(false);
const showSchema = ref<boolean>(false);
const selectedFunc = ref<FunctionDefinition | null>(null);
const showForm = ref<boolean>(false);
const getFunctions = async () => {
    await request("/api/functions", {});
    funcs.value = response.value;
};

const openModal = (func: FunctionDefinition) => {
    selectedFunc.value = func;
    showModal.value = true;
    showSchema.value = false;  // Reset the schema visibility when opening a new modal
};

const toggleSchema = () => {
    showSchema.value = !showSchema.value;
};

const assistants = ref<Assistant[]>([])
const labelMoveName = ref(false);
const labelMoveDescription = ref(false);


onMounted(async () => {
    await getFunctions();
});
</script>
<template>
    <div class="w-36 p-2 tr col items-center max-h-50vh h-full overflow-y-auto overflow-x-hidden fixed bg-gradient-to-bl from-secondary to-secondary via-info animate-gradient text-accent sh">
        <ul class="col center list-none">
            <li class="col center mr-8 backdrop-blur-lg  p-2 m-2 rounded sh w-32" v-for="func in funcs" :key="func.name" @click="openModal(func)">
                <p>{{ func.name }}</p>
								<img :src="`/${func.name.toLowerCase()}.png`" class="x4 rf sh cp scale z-50 animate-fade-in" />
            </li>
        </ul>

        <Modal v-if="showModal" @close="showModal = false" class="max-w-128 min-w-72 mx-auto"  >
            <template #body>
                <p class="text-xs text-white rounded-lg col gap-4 center p-2 m-2" :style="{  backgroundImage: `url(/${selectedFunc!.name.toLowerCase()}.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
									<i class="text-#cf0 bg-black sh rounded-lg px-4 py-2 opacity-70">{{ selectedFunc!.name }}</i>
                    <p class=" backdrop-blur-md p-1">{{ selectedFunc?.description }}</p>
                    <Icon icon="mdi-code-braces" title="Show Schema" class="icon-btn cp scale text-#cf0 bg-black sh rf p-1 opacity-70 x2" @click="toggleSchema" />
                </p>
                <pre v-if="showSchema" class="text-#cf0 bg-black sh rounded-lg col center overflow-auto p-8 m-4" lang="json">
                   
                    {{ JSON.stringify(selectedFunc!.parameters.properties, null, 2) }}
                </pre>
            </template>
        </Modal>
          </div>
          <div class="w-36 p-2 br col items-center max-h-50vh h-full overflow-y-auto overflow-x-hidden fixed bg-gradient-to-br from-secondary to-secondary via-info  animate-gradient text-accent sh">
			<div v-if="assistants.length > 0" class="col center gap-4">
				<p v-for="assistant in assistants">
					{{ assistant.name  }}
				</p>
				</div>
				<div v-else>
					<GradientButton text="New Assistant" @click="showForm=!showForm" class="bottom-4 right-4 absolute"/>
					<Modal v-if="showForm" @close="showForm = false" class="max-w-128 min-w-72 mx-auto"  >
						<template #body>
							<p class="bg-gradient-to-bl from-gray-400 to-gray-400 via-gray-500 text-accent sh rounded-lg col center p-8 m-2 animate-gradient">
  <i class="text-title">New Assistant Onboarding</i>
  <form class="col center gap-4 p-4 min-w-72">
    <div class="relative m-2">
      <label :class="{ 'label-move': labelMoveName }" for="name" class="absolute left-2 top-2 transition-all duration-200 text-black">Name</label>
      <input id="name" type="text"
        class="bg-gray-300 w-full text-black sh rounded-lg col center p-2 border-b focus:outline-none focus:border-black"
     
        @focus="labelMoveName = true"
        @blur="labelMoveName = false" />
    </div>
    <div class="relative m-2">
      <label :class="{ 'label-move': labelMoveDescription }" for="description" class="absolute left-4 top-4 transition-all duration-200 text-black">Description</label>
      <textarea id="description"
        class="bg-gray-300 w-full text-black sh rounded-lg col center p-2 m-2 border-b focus:outline-none focus:border-black"
   
        @focus="labelMoveDescription = true"
        @blur="labelMoveDescription = false" />
    </div>
    <GradientButton text="Create" class="col center p-2 m-2 w-fi" />
  </form>
</p>
						</template>
					</Modal>
				</div>
                </div>
</template>

<style scoped>
@keyframes anime {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.animate-gradient {
    background-size: 600%;
    animation: anime 4s linear infinite;
}
.label-move {
  transform: translateY(-25px);
  font-size: 0.75rem;
}
</style>