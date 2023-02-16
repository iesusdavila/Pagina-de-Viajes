/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        gye1: 'url("./public/imgs/gye_1.jpeg")',
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primario: "#cc2d4a",
        secundario: "#8fa206",
        terceario: "#61aec9",
      }),
    },
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  variants: {},
  plugins: [],
  corePlugins: {
    focus: true,
  },
  darkMode: "class",
};
