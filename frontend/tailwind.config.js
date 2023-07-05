/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252526",
        secondary: "#c6b68b",
        "contact-primary": "#1a1a1a",
        "contact-secondary": "#BEB185",
      },
      spacing: {
        5.5: "1.375rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        19: "4.75rem",
        20.5: "5.125rem",
        23: "5.75rem",
        26: "6.5rem",
        30: "7.5rem",
        100: "25rem",
        219.5: "54.875rem",
        300: "75rem",
      },
      transitionTimingFunction: {
        header: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      screens: {
        xs: "360px",
      },
      backgroundImage: {
        mobile: "url('../public/img/mark.png')",
      },
    },
  },
  plugins: [],
};
