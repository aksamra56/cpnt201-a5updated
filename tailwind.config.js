/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",

        pink: "#FFF5F5",
        white: "#fff",

        "gray-dark": "#273444",
        gray: "#8492a6",
        lead: "#4F4F4F",

        "gray-light": "#d3dce6",
        black: "#000",
        "light-black": "#1c1a1a",
      },
      spacing: {
        half: "50%",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",
      },
    },
  },
};
