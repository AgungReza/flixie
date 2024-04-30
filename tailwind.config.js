/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-blue": {
          100: "#E7E6EB",
          200: "#CFCED7",
          300: "#B7B5C3",
          400: "#9F9CAF",
          500: "#87849C",
          600: "#6E6B88",
          700: "#565274",
          800: "#3E3960",
          900: "#26214C",
          1000: "#0E0838",
        },
        lagoon: {
          100: "#E5FCFF",
          200: "#B3F5FF",
          300: "#80EEFF",
          400: "#4DE8FF",
          500: "#1AE1FF",
          600: "#00C8E6",
          700: "#009BB3",
          800: "#006F80",
          900: "#00434D",
          1000: "#00161A",
        },
        neon: {
          100: "#FFE6F6",
          200: "#FEB4E5",
          300: "#FD82D3",
          400: "#FC50C2",
          500: "#FB1EB0",
          600: "#E10497",
          700: "#AF0375",
          800: "#7D0254",
          900: "#4B0132",
          1000: "#190011",
        },
      },
      fontSize: {
        h1: "64px",
        h2: "50px",
        h3: "40px",
        h4: "32px",
        h5: "26px",
        bLg: "20px",
        bnormal: "16px",
        bsm: "14px",
        llg: "12px",
        lsm: "8px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
