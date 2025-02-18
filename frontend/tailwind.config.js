/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C7A3D", // Base green
        "primary-light": "#4CAF50", // Lighter shade for hover states
        "primary-dark": "#1B5E20", // Darker shade for active states
        secondary: "#F4D03F", // Base yellow
        "secondary-light": "#FFF176", // Lighter shade for hover states
        "secondary-dark": "#F57F17", // Darker shade for active states
        dark: "#1B1B1B",
        "dark-light": "#333333",
        light: "#F8F9FA",
        "light-dark": "#E9ECEF",
      },
      boxShadow: {
        smooth: "0 4px 10px rgba(0, 0, 0, 0.1)",
        "smooth-lg": "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "inner-smooth": "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
        glow: "0 0 15px rgba(76, 175, 80, 0.5)",
        "glow-yellow": "0 0 15px rgba(244, 208, 63, 0.5)",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "2000": "2000ms",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "eco-pattern": "url('/patterns/eco-pattern.svg')",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        ".backdrop-blur-xs": {
          backdropFilter: "blur(2px)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};