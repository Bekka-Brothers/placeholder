const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        brand: ["'Bebas Neue'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
