/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './template/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '1.5rem',
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1000px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
};
