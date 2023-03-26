/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 976px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          dark: "#010623",
          light: "#010D55",
        },
        secondary: {
          dark: "#E1AA2B",
          light: "#FBF5E6",
        },
        tertiary: {
          dark: "#FCFCFC",
          light: "#FCFCFC",
        },
        light: "#F8F8FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};