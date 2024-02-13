<template>
  <div
    class="flex flex-col justify-center align-middle items-center h-full w-full"
  >
    <div class="flex divide-x-4 divide-black gap-3 font-medium">
      <NuxtLink :to="switchLocalePath('ar')">العربية</NuxtLink>
      <NuxtLink class="ps-3" :to="switchLocalePath('en')">English</NuxtLink>
    </div>
    <NuxtPicture :width="logoWidth" src="/logo/logo.svg" />

    <div class="text-5xl md:text-7xl lg:text-9xl text-center w-full font-brand">
      <p>{{ $t("HOME.soon") }}</p>
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const switchLocalePath = useSwitchLocalePath();
const { width } = useWindowSize();

// calculate the logo width based on the window width
// give the logo enough space to breathe on the x axis
// and stay in the center of the screen
const logoWidth = computed(() => {
  return width.value / 2;
});
</script>
