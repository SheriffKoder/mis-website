/** @type {import('tailwindcss').Config} */

// const colors = require("./constants.jsx");

// to use neon:
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",

  theme: {
    // colors,
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',

      }
    },
  },
  plugins: [
    require("tailwindcss-autofill"),
    require("tailwindcss-shadow-fill"),
    require("tailwindcss-text-fill"),

    // add neon to be used in css by neon:
    plugin(function({addVariant}) {
      addVariant('neon', '.neon &')
    }),


  ],
}

