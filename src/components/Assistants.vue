<script setup lang="ts">
import type { FunctionDefinition, Assistant, User } from "@/types";
import { on } from "events";
const { request, response } = useRequest<FunctionDefinition[]>();
const { request:req, response:res } = useRequest<Assistant | Assistant[]>()
const { state } = useStore()
const props = defineProps<{
    user: User;
}>();   
const funcs = ref<FunctionDefinition[]>([]);
const showModal = ref<boolean>(false);
const showSchema = ref<boolean>(false);
const selectedFunc = ref<FunctionDefinition | null>(null);
const showForm = ref<boolean>(false);
const text = ref<string>("");
const assistants = ref<Assistant[]>([])
const assistantName = ref<string>("");
const instructions = ref<string>("");
const description = ref<string>("");

const body = computed(() => {
    return {
        name: assistantName.value,
        description: description.value,
        instructions: instructions.value,
        tools: tools.value
    }
})


const labelMoveName = ref(false);
const labelMoveDescription = ref(false);
const labelMoveInstructions = ref(false);
const isOverDropzone = ref(false);
const defs = ref<FunctionDefinition[]>([])
const tools = computed(() => {
    return defs.value.map((def) => {
        return {
            function: def,
            type: "function",
        };
    });
});

const getAssistants = async()=>{
    await req(`/api/assistant/${props.user.sub}`, {});
    assistants.value = res.value as Assistant[];
}

onMounted(async () => {
    await getAssistants();
});

const getFunctions = async () => {
    await request("/api/functions", {});
    funcs.value = response.value;
};
onMounted(async () => {
    await getFunctions();
});
const openModal = (func: FunctionDefinition) => {
    selectedFunc.value = func;
    showModal.value = true;
    showSchema.value = false;
};
const toggleSchema = () => {
    showSchema.value = !showSchema.value;
};
const handleDragStart = (e: DragEvent, func: FunctionDefinition) => {
    e.dataTransfer?.setData("application/json", JSON.stringify(func));
  };
const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    isOverDropzone.value = true;
}
const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    isOverDropzone.value = false;
}
const onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isOverDropzone.value = false;
""
    const data = e.dataTransfer?.getData("application/json");
    if (data) {
        const func = JSON.parse(data);
        if (!defs.value.find((d) => d.name === func.name)) {
            defs.value.push(func);
        }
    }
};
const createAssistant = async () => {
    if (!assistantName.value || !description.value || !instructions.value) {
        return;
    }
    await req(`/api/assistant/${props.user.sub}`, {
        method: "POST",
        body: JSON.stringify(unref(body)),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.value) {
        assistants.value.push(res.value);
    }
    await getAssistants();
};

</script>
<template>
    <div class="w-36 p-2 tr col items-center max-h-50vh h-full overflow-y-auto overflow-x-hidden fixed bg-gradient-to-bl from-secondary to-secondary via-info animate-gradient text-accent sh">
        <ul class="col center list-none">
            <li :draggable="true" @dragstart="handleDragStart($event, func)" @click="openModal(func)" class="col center mr-8 backdrop-blur-lg  p-2 m-2 rounded sh w-32" v-for="func in funcs" :key="func.name">
                <p>{{ func.name }}</p>
								<img :src="`/${func.name.toLowerCase()}.png`" class="x4 rf sh cp scale z-50 animate-fade-in" />
            </li>
        </ul>

        <Modal v-if="showModal" @close="showModal = false" class="max-w-128 min-w-72 mx-auto"  >
            <template #body>
                <section class="col center">
                <p class="text-xs text-white rounded-lg col gap-4 center p-2 m-2" :style="{  backgroundImage: `url(/${selectedFunc!.name.toLowerCase()}.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
									<i class="text-#cf0 bg-black sh rounded-lg px-4 py-2 opacity-70">{{ selectedFunc!.name }}</i>
                    <p class=" backdrop-blur-md p-1">{{ selectedFunc?.description }}</p>
                    <Icon icon="mdi-code-braces" title="Show Schema" class="icon-btn cp scale text-#cf0 bg-black sh rf p-1 opacity-70 x2" @click="toggleSchema" />
                </p>
                <pre v-if="showSchema" class="text-#cf0 bg-black sh rounded-lg col center overflow-auto p-8 m-4" lang="json">
                   
                    {{ JSON.stringify(selectedFunc!.parameters.properties, null, 2) }}
                </pre>
               
                <UserFunctions :url="`/api/functions/${selectedFunc.name}`" v-if="selectedFunc">
                <template #default="{data, pub}">
                    
                <div>
                    {{ data }}
                </div>
                    <textarea type="text" v-model="text" class="w-full px-4 py-2 rounded-lg mx-2" placeholder="Type a message" @keydown.enter="pub(text)" />
                
                </template>
                </UserFunctions>
            </section>
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
					<Modal v-if="showForm" @close="showForm = false" class="max-w-168 min-w-72 mx-auto"  >
						<template #body>
							<p class="bg-gradient-to-bl from-gray-400 to-gray-400 via-gray-5000 text-accent sh rounded-lg col center p-8 m-2 animate-gradient">
  <i class="text-title">New Assistant Onboarding</i>
  <form class="col center gap-2 p-2 min-w-96 pr-12">
    <div class="relative m-2 w-full">
      <label :class="{ 'label-move': labelMoveName }" for="name" class="absolute left-6 top-2 transition-all duration-200 text-black"
      :style="assistantName.length && !labelMoveName ? 'transform: translateY(-25px);font-size: 0.75rem;' : ''"
      >Name</label>
      <input id="name" type="text"
        class="bg-gray-300 w-full border-none mx-2 p-2 text-black sh rounded-lg col center p-2 border-b focus:outline-none focus:border-black"
        v-model="assistantName"
        @focus="labelMoveName = true"
        @blur="labelMoveName = false" />
    </div>
    <div class="relative m-2 p-2 w-full">
      <label :class="{ 'label-move': labelMoveDescription }" for="description" class="absolute left-6 top-6 transition-all duration-200 text-black"
      :style="description.length && !labelMoveDescription ? 'transform: translateY(-25px);font-size: 0.75rem;' : ''"
      >Description</label>
      <textarea id="description"
        v-model="description"
        class="bg-gray-300 w-full  text-black sh rounded-lg col center px-2 m-2 border-b focus:outline-none focus:border-black"
        rows="6"
        @focus="labelMoveDescription = true"
        @blur="labelMoveDescription = false" />
    </div>
    <div class="relative m-2 p-2 w-full">
      <label :class="{ 'label-move': labelMoveInstructions }" for="instructions" class="absolute left-6 top-6 transition-all duration-200  text-black" :style="instructions.length && !labelMoveInstructions ? 'transform: translateY(-25px);font-size: 0.75rem;' : ''"
      >Instructions</label>
        <textarea id="instructions" rows="6"
            class="bg-gray-300 w-full  sh rounded-lg col center p-2 m-2 border-b focus:outline-none focus:border-black"
            v-model="instructions"
            @focus="labelMoveInstructions = true"
            @blur="labelMoveInstructions = false" />
    </div>
   <div dropzone :class="isOverDropzone ? 'dropzone-over':'dropzone'" @drop="onDrop($event)"
   @dragover="handleDragOver($event)" @dragleave="handleDragLeave($event)">
    <div v-if="tools.length > 0" class="row gap-4 center text-xs text-white">
      <p v-for="tool in tools" class="row center relative bg-center bg-cover bg-no-repeat mask-dark rf  p-1 x4" :style="{  backgroundImage: `url(/${tool.function.name.toLowerCase()}.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }"  @click="defs = defs.filter((d) => d.name !== tool.function.name)">  
       <span class="text-white brightness-300 z-50 p-2"> {{ tool.function.name  }}</span>
      </p>
      </div>
      <div v-else>
        <p class="text-center">Drag and Drop Tools Here</p>
      </div>
    </div>
    <GradientButton text="Create" class="col center p-2 m-2 w-fi"
        @click.prevent="createAssistant"
     />
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
.dropzone{
    @apply col center w-full p-8;
    @apply border-dashed border-2 border-gray-700;
    @apply rounded-lg;
    @apply h-24 w-72;
}
.dropzone-over{
    @apply col center w-full p-8;
    @apply border-dashed border-2 border-gray-700;
    @apply rounded-lg;
    @apply bg-gray-700;
     @apply h-24 w-72;
    @apply text-white;
}
.mask-dark::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay with 50% opacity */
    z-index: 1;
    border-radius: 50%;
}

.mask-dark * {
    position: relative;
    z-index: 2;
}
</style>