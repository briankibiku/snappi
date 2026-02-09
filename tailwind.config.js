/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snappi: {
          primary: '#FF9B6A',
          secondary: '#FF8A5C',
          accent: '#FFA67E',
          light: '#FFE5D9',
          dark: '#E67E50',
        },
      },
      backgroundImage: {
        'gradient-snappi': 'linear-gradient(135deg, #FF9B6A 0%, #FF8A5C 100%)',
      },
    },
  },
  plugins: [],
}