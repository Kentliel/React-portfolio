/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      keyframes:{
        wiggle:{
          '0%, 100%': { transform: 'rotate(-15deg)'},
          '50%': { transform: 'rotate(15deg)'},
        },
      },
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      fontFamily: {
        'Poppins': ['Poppins'],
        'Playfair': ['Playfair Display'],
        'DmSerif': ['DM Serif Display']
      }
    },
  },
  plugins: [],
}

