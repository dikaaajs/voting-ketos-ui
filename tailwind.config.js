/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      send: ["Send Flowers", "cursive"],
      courier: ["Courier Prime", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
