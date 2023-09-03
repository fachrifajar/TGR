/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#125ab8",
        "primary-dark": "#1a73e8",
        secondary: "#42a5f5",
        "secondary-dark": "#90caf9",
        textPrimary: "#07111c",
        "textPrimary-dark": "#e8e6e3",
        textSecondary: "#5f6368",
        "textSecondary-dark": "#a9a297",
        background: "#f3f3f1",
        "background-dark": "#0a1929",
        tertiary: "#fff",
        "tertiary-dark": "#1a2027",
        contrastText: "#90caf9",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [],
};
