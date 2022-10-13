/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
       lightBlack:'#1D2130',
      },
      fontFamily: {
        robotoFont: ['Roboto'],
      },
      background:{
        custbg1: 'radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%);',
        custbg3: 'radial-gradient(483.9% 2719.65% at -49.5% -250%, #d798e173 17.55%, #9bffa563 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)',
        custbg2: 'rgba(215, 152, 225, 0.15)'
      }
    },
  },
  plugins: [],
}
 