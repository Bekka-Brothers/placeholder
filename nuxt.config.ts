// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
  routeRules: {
    "/": { prerender: true },
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.js", dir: "ltr", name: "English" },
      { code: "ar", iso: "ar-SA", file: "ar.js", dir: "rtl", name: "العربية" },
    ],
    defaultLocale: "ar",
    defaultDirection: "rtl",
    lazy: true,
    strategy: "prefix_except_default",
    langDir: "locales/",
    baseUrl:
      process.env.NODE_ENV === "production"
        ? process.env.BASE_URL
        : "http://localhost:8888",
  },
});
