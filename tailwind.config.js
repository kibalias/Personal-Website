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
        },
      'earth': {
        100: '#e5cabb',
        200: '#c49e8a',
        300: '#8e614d',
        400: '#5e5343'
      }
      }, 
      fontFamily: {
        'Poppins': ['Poppins'],
        'Lilita': ['Lilita One'],
        'Playfair': ['Playfair Display'],
        'Helvetica': ['Helvetica'],
        'OpenSans': ['Open Sans'],
        'Roboto': ['Roboto'],
        'Lato': ['Lato'],
        'Bebas': ['Bebas Neue']
        },
    },
  },
  plugins: [],
}
