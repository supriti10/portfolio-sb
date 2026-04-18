/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        "black-100": "#1a1a1a",
        "black-200": "#111111",
        "black-300": "#0a0a0a",
        "black-500": "#050505",
        "black-600": "#000000",
      },
    },
  },
  plugins: [],
};