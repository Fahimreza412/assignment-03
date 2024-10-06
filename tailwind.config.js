/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/src/assets/bg.jpg')",
      }
    },
  },
  plugins: [ require('daisyui'),],
}