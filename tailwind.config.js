/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#6b5b95",
        secondary: "#887bb0",
        "background-light": "#fcfbfc",
        "background-dark": "#18171b",
        "text-main": "#141315",
        "text-muted": "#736f7b",
      },
      fontFamily: {
        display: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
}
