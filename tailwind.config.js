/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [

    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/component/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },

  darkMode: 'class',

  plugins: [],
}

