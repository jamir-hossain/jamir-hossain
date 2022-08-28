/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      error: colors.error,
      warning: {
        light: "#f7b13b",
        DEFAULT: "#f59e0b",
        dark: "#ab6e07",
      },
      success: {
        light: "#a27cf7",
        DEFAULT: "#10b981",
        dark: "#0b815a",
      },
      primary: {
        light: "#548e4c",
        DEFAULT: "#78CC6D",
        dark: "#548e4c",
      },
      secondary: {
        light: "#fff676",
        DEFAULT: "#fff454",
        dark: "#b2aa3a",
      },
    },
    extend: {
      screens: {
        xl: "1200px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
