/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'serif']
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      animation: {
        slideDown: 'slideDown .6s ease-in-out',
        fadeIn: 'fadeIn .6s ease-in-out',

      },

      backgroundImage: {
        'slider-bg': 'url("/img/banner/banner-shoe.jpg")'
      }
    },
  },
  plugins: [],
}

