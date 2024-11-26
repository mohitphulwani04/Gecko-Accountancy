/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/containers/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xsm: "350px",
      sm: "480px",
      md: "567px",
      md2: "600px",
      lg: "768px",
      lg2: "880px",
      xl: "1024px",
      xl1: "1150px",
      xl2: "1200px",
      xl3: "1400px",
    },
    extend: {
      backgroundImage: {},
      colors: {
        quoteSectionback: "#E7F1F2",
      },
      boxShadow: {},
      fontFamily: {
        sf: "Source Sans, sans-serif",
        sans: ["DM Sans"],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: {},
    },
  },
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [],
};

