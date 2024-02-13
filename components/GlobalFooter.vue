<template>
  <footer class="fixed bottom-0 w-full p-2 text-sm text-center">
    <div>
      {{ $t("LAYOUT.footer.bekka") }} © {{ compyrightYears }}.
      {{ $t("LAYOUT.footer.rights") }}
    </div>
  </footer>
</template>

<script setup>
const established = 2024;
const currentYear = ref(new Date().getFullYear());

const compyrightYears = computed(() => {
  return currentYear.value > established
    ? `${established} - ${currentYear.value}`
    : established;
});
</script>
