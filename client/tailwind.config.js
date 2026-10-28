/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chineseRed: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          900: '#881337',
        },
        imperialGold: {
          500: '#f59e0b',
          600: '#d97706',
        },
        jade: {
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        chinese: ['"Noto Sans SC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
