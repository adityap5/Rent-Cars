/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:[ "Poppins", 'sans-serif']
      },
      colors:{
        blue: '#1572D3',
        txt: "#484848",
        bg: "#d9e6f5"
      }
    },
  },
  plugins: [],
}

