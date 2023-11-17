/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'palette': {
          100: '#FF942F',
          200: '#EEA25A',
          300: '#FFBB0C',
          400: '#964E0B',
          500: '#6B3706',
          600: '#383838'
        }
      }, 
      fontFamily: {
        'Poppins': ['Poppins'],
        'Lilita': ['Lilita One'],
        'Playfair': ['Playfair Display']
        },
    },
  },
  plugins: [],
}
