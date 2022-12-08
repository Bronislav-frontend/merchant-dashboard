/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      main: ["Inter", "sans-serif"],
      // primary: ["Euxodus", "sans"],
    },
  },
  plugins: [],
};
