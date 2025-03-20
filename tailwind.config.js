/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
};