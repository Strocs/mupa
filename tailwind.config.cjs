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
        helvetica: ['Helvetica', 'system-ui', 'sans-serif']
      },
      animation: {
        background: 'background 5s linear infinite alternate',
        shapes: 'shapes 2s ease-in-out infinite alternate',
        'bounce-2': 'bounce-2 1s ease-in-out'
      },
      keyframes: {
        'bounce-2': {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-30px)' },
          '50%': { transform: 'translateY(0)' },
          '70%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' }
        },
        background: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(0, 0) scale(1.4)'
          },
          '66%': {
            transform: 'translate(0, 0) scale(1)'
          },
          '100%': {
            transform: ' translate(0, 0px)scale(1.2)'
          }
        },
        shapes: {
          from: {
            transform: 'translate(0, 0)'
          },
          to: {
            transform: 'translate(8px, -8px)'
          }
        }
      }
    }
  },
  plugins: []
}
