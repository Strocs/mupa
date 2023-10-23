/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#676766',
        'light-grey': '#999',
        primary: '#3c3c3b',
        pink: '#d6a6bd',
        blue: '#214988',
        red: '#cf6a58',
        ocher: '#98963b',
        purple: '#9571b0',
        yellow: '#f4c602',
        fuchsia: '#ad60a3'
      },
      fontFamily: {
        'source-code': ['Source Code Pro', 'monospace'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
        'helvetica-light': ['Helvetica Neue', 'Helvetica Light', 'sans-serif'],
        'helvetica-bold': ['Helvetica Neue', 'Helvetica Bold', 'sans-serif']
      },
      animation: {
        blob: 'blob 5s linear infinite alternate',
        shapes: 'shapes 3s ease-in-out infinite alternate'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(80px, -20px) scale(1.3)'
          },
          '66%': {
            transform: 'translate(-80px, 50px) scale(1)'
          },
          '100%': {
            transform: ' translate(0px, 0px)scale(0.8)'
          }
        },
        shapes: {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '50%': {
            transform: 'translate3d(5px, -5px, 5px)'
          },
          '100%': {
            transform: ' translate3d(0, 0, 0)'
          }
        }
      }
    }
  },
  plugins: []
}
