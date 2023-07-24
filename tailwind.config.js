/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#463DFF",
      secondary: "#FF3E89",
      white: "#fff",
      black: "#111111",
      buttonColor: "#ffb106",
      lineColor: "#888888",
      textSecondary: "#5AC1ED",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        rotation: "rotation 2s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
