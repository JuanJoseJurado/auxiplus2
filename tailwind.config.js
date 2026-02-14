/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#047f5a",
        "primary-dark": "#024530",
        secondary: "#aea89e",
        "background-light": "#fcfbfc",
        "background-dark": "#18171b",
        "text-main": "#141315",
        "text-muted": "#736f7b",
      },
      fontFamily: {
        display: ["Bryant", "sans-serif"],
        body: ["Bryant", "sans-serif"],
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
