/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
