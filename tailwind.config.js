/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warna1': '#947C33',
        'warna2': '#F6F6F6',
      },
      fontFamily: {
        alike: ['Alike', 'sans-serif'], // Menambahkan font Alike
      },
    },
  },
  plugins: [],
};
