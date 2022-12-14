/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.3xl") },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.medium"),
        },
        h3: { fontSize: theme("fontSize.xl") },
        h4: {
          fontWeight: theme("fontWeight.medium"),
        },
      });
    }),
  ],
};
