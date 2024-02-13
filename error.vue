<script setup lang="ts">
import type { NuxtError } from "#app";

const localePath = useLocalePath();
const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <main class="w-full h-full flex flex-col gap-4 justify-center items-center">
    <div class="flex divide-x-4 gap-6 divide-black items-center">
      <h1 class="font-brand text-9xl">{{ error.statusCode }}</h1>
      <div class="font-medium text-5xl ps-6">
        {{ error.statusMessage }}
      </div>
    </div>
    <NuxtLink class="text-3xl" :to="localePath('/')">Go back home</NuxtLink>
  </main>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  @apply bg-amber-400;
}
</style>
