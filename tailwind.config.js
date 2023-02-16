/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        gye1: 'url("../public/imgs/fondos/fondo_ec_6.jpg")',
      },
      colors: {
        primario: "#022534",
        secundario: "#2b4534",
        terceario: "#08546c",
        cuaternario: "#1E0733",
        oscuro: "#020203",
        claro: "#a0bacc",
      },
      boxShadow: {
        box: "-3px 3px 0px 0px #2c2cbf",
      },
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
