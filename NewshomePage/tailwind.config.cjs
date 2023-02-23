/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      'softOrange':'#E9AB53',
      'softRed':'#F15E50',
      'offWhite':'#FFFDFA',
      'grayishBlue':'#C5C6CE',
      'darkGrayishBlue':'#5D5F79',
      'veryDarkBlue':'#000019'


    },
    fontFamily:{
        'inter': ['Inter']
    },
    extend: {},
    screens : {
      'mobile':'375px',
      'desktop':'1300px'
    }
  },
  plugins: [],
}
