/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252526",
        secondary: "#c6b68b",
      },
    },
  },
  plugins: [],
};
