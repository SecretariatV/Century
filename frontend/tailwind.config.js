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
        7.5: "1.875rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      transitionTimingFunction: {
        header: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};
