// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// // /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontSize: {
      xxs : ['8px', '10px'],
      xs : ['10px', '12px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      car:['17px', '24px'],
      base2:['25px', '30px'],
      h_1:['22px','32px'],
      lg: ['15px', '32px'],
      th:['17px','30px'],
      x: ['26px', '42px'],
      xl: ['34px', '46px'],
      ml:['38px', '66px'],
      head:['24px', '46px'],
      fourxl: ['2.441rem'],
      xxl: ['62px', '85px'],
      xml:['59px','70px'],
      xxxl:['65px','86px']
    },

    screens: {
      'small_mob1':'220px',
      'big_mob1':'299px',
      'bigg_mob2':'312px',
      'mobile' : '305px',
      'r1':"504px",
      'ipad' : '300px',
      'gapp':'406px',
      'tab' : '500px',
      'sm': '640px',
      'md': '761px',
      'md2':'951px',
      'lg': '1023px',
      'lg1': '1057px',
      'lgg':'1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'cus':'373px',
      'cust':'450px',
      'cust1':'730px',
      'cust3' : '641px',
      'cust2':'654px',
      '3xl': '1920px'
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"),
  require("rippleui")]
}
