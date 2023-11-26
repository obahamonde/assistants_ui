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



onMounted(async () => {
    await getFunctions();
});
</script>
<template>
    <div class="h-screen w-36 p-4 tr col items-center fixed bg-secondary text-accent sh">
        <ul class="col center list-none">
            <li class="col center mr-8 bg-gray-200 p-2 m-2 rounded sh w-32" v-for="func in funcs" :key="func.name" @click="openModal(func)">
                <p>{{ func.name }}</p>
								<img :src="`/${func.name.toLowerCase()}.png`" class="x4 rf sh cp scale z-50" />
            </li>
        </ul>

        <Modal v-if="showModal" @close="showModal = false" class="max-w-128 min-w-72 mx-auto"  >
            <template #body>
                <p class="text-xs text-white rounded-lg col gap-4 center p-8 m-4" :style="{  backgroundImage: `url(/${selectedFunc!.name.toLowerCase()}.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
									<i class=" backdrop-blur-lg p-1">{{ selectedFunc!.name }}</i>
                    <p class=" backdrop-blur-lg p-1">{{ selectedFunc?.description }}</p>
                    <Icon icon="mdi-magnify" class="icon-btn cp scale x2" @click="toggleSchema" />
                    Show Schema
                </p>
                <pre v-if="showSchema" class="text-#cf0 bg-black sh rounded-lg col center overflow-auto p-8 m-4" lang="json">
                    {{ JSON.stringify(selectedFunc!.parameters, null, 2) }}
                </pre>
            </template>
        </Modal>
			<div v-if="assistants.length > 0" class="col center gap-4">
				<p v-for="assistant in assistants">
					{{ assistant.name  }}
				</p>
				</div>
				<div v-else>
					<button @click="showForm = true">Create Assistant</button>
					<Modal v-if="showForm" @close="showForm = false" class="max-w-128 min-w-72 mx-auto"  >
						<template #body>
							<p class="text-xs text-white rounded-lg col gap-4 center p-8 m-4">
								<i class=" backdrop-blur-lg p-1">Create Assistant</i>
								<p class=" backdrop-blur-lg p-1">Create a new assistant</p>
								<form class="col center gap-4">
									<input type="text" placeholder="Name" />
									<input type="text" placeholder="Description" />
									<button>Create</button>
								</form>
							</p>
						</template>
					</Modal>
				</div>
    </div>
</template>

<style scoped>

</style>