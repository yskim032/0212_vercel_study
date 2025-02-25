/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  
  content: [

    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/component/**/*.{js,ts,jsx,tsx}",
    "./app/component/home/**/*.{js,ts,jsx,tsx}",  
    


  ],
  theme: {
    extend: {},
  },

  darkMode: 'class',

  plugins: [],
}

