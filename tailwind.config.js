/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-2": "#444",
        "dark-1": "#151515",
        "dark-3": "#737373",
        "color-primary": "#FF3811",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
