/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252526",
        secondary: "#c6b68b",
      },
      spacing: {
        30: "7.5rem",
      },
      transitionTimingFunction: {
        header: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};
