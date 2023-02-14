/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  purge: [
    "./index.html", // Ruta al archivo index.html
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  variants: {},
  plugins: [],
  corePlugins: {
    focus: true,
  },
  darkMode: "class",
};
