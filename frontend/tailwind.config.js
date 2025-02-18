/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Fixed glob pattern
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C7A3D",
        secondary: "#F4D03F",
        dark: "#1B1B1B",
        light: "#F8F9FA",
      },
      boxShadow: {
        smooth: "0 4px 10px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        xl: "12px",
      },
      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};