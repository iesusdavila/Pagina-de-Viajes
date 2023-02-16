/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        ecuador: 'url("../public/imgs/fondos/fondo_ec_6.jpg")',
        banos: 'url("../public/imgs/ciudades/banos_1.jpeg")',
        cuenca: 'url("../public/imgs/ciudades/cuenca_2.jpeg")',
        galap: 'url("../public/imgs/ciudades/galapagos_4.jpeg")',
        gye: 'url("../public/imgs/ciudades/gye_2.jpeg")',
        loja: 'url("../public/imgs/ciudades/loja_1.jpeg")',
        manta: 'url("../public/imgs/ciudades/manta_2.jpg")',
        mindo: 'url("../public/imgs/ciudades/mindo_2.jpeg")',
        montan: 'url("../public/imgs/ciudades/montanita_1.jpeg")',
        quito: 'url("../public/imgs/ciudades/quito_1.jpeg")',
        salinas: 'url("../public/imgs/ciudades/salinas_1.png")',
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
