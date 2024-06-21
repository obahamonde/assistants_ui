<script setup lang="ts">
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { shallowRef, watch } from "vue";
import { OrbitControls } from "@tresjs/controls";
import gsap from "gsap";

const props = defineProps<{ namespace: string }>();
const boxesRef = shallowRef();
const zs = [];
for (let z = -4.5; z <= 4.5; z++) {
  zs.push(z);
}

watch(boxesRef, () => {
  //getting positions for all the boxes
  const positions = Array.from(boxesRef.value.children).map(
    (child) => child.position,
  );
  //getting rotations for all the boxes
  const rotations = Array.from(boxesRef.value.children).map(
    (child) => child.rotation,
  );

  const animProperties = {
    ease: "power1.inOut",
    duration: 1,
    stagger: {
      each: 0.25,
      repeat: -1,
      yoyo: true,
    },
  };
  gsap.to(positions, {
    y: 2.5,
    ...animProperties,
  });
  gsap.to(rotations, {
    x: 2,
    ...animProperties,
  });
});
</script>

<template>
  <TresCanvas clear-color="#82DBC5">
    <TresPerspectiveCamera :position="[-15, 10, 15]" />
    <OrbitControls />
    <TresGroup ref="boxesRef">
      <TresMesh v-for="(z, i) of zs" :key="i" :position="[0, 0.5, z]">
        <TresBoxGeometry />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresGroup>
    <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
  </TresCanvas>
</template>
