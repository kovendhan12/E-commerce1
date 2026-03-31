/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html",
    "./js/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        appleGray: '#f5f5f7',
        appleDark: '#1d1d1f',
        appleBlue: '#2997ff',
        accent: '#7c3aed',
        accentLight: '#ede9fe',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        fadeUp: 'fadeUp 0.5s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        pulse2: 'pulse2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}
