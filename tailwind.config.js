module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        "2xl": "1280px",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
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
          light: "#93d68a",
          DEFAULT: "#78CC6D",
          dark: "#548e4c",
        },
        secondary: {
          light: "#fff676",
          DEFAULT: "#fff454",
          dark: "#b2aa3a",
        },
        dark: {
          400: "#2b3952",
          secondary: "#0d2242",
          primary: "#0a192f",
        },
        light: {
          secondary: "#93d68a",
          primary: "#78CC6D",
        },
      },
      boxShadow: {
        default: "0px 3px 6px rgba(62, 66, 101, 0.05);", //shadow
        drop: "0px 4px 24px rgba(0, 0, 0, 0.07);",
        outline: "0px 1px 6px rgba(62, 66, 101, 0.05);", //2
        normal: "1px 8px 16px rgba(62, 66, 101, 0.06);", //3
        hover: "0px 20px 24px rgba(62, 66, 101, 0.07);", //4
        avatar: "0px 0px 6px rgba(62, 66, 101, 0.17);", //5
        gray: "0px 10px 18px rgba(19, 16, 34, 0.22);", //6
        primary: "0px 10px 18px rgba(118, 74, 241, 0.22);",
        success: "0px 10px 18px rgba(31, 177, 85, 0.22);",
        warning: "0px 10px 18px rgba(255, 160, 50, 0.22);",
        danger: "0px 10px 18px rgba(231, 62, 62, 0.22);",
        input: "0px 3px 6px rgba(62, 66, 101, 0.05);",
      },
      dropShadow: {
        "primary-glow": "0px 11px 25px rgba(73, 123, 254, 0.3)",
      },
    },
  },
  plugins: [],
};
