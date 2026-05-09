/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // මෙතන තමයි අපි අලුත් Fonts සහ Colors එකතු කරන්නේ
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Luxury Look එක සඳහා
        sans: ['Inter', 'sans-serif'],          // පිරිසිදු නිමාව සඳහා
      },
      letterSpacing: {
        'extra-widest': '.5em', // අකුරු අතර පරතරය වැඩි කිරීමට අලුත් class එකක්
      }
    },
  },
  plugins: [],
}