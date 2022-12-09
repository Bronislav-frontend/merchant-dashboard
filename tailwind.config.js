/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        card: "0px 5px 20px rgba(108, 117, 139, 0.2)",
      },
    },
    fontFamily: {
      main: ["Inter", "sans-serif"],
      // primary: ["Euxodus", "sans"],
    },
  },
  plugins: [],
};
