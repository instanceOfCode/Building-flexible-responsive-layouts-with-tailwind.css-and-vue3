module.exports = {
  mode:'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
     
        purple100: "#A171A7",
        purple200: "#83478B",
        purple300:"#672770",
        purple400: "#4B0F54",
        purple500: "#310138",
       
        green300: "#699A33",	// Main Secondary color (1) */
        green100: "#C2E79A",
        green200: "#92C060",
        green400: "#457313",
        green500: "#284D00",
       
        yellow100: "#FFF5AA",	// Main Secondary color (2) */
        yellow200: "#D4C96A",
        yellow300: "#AA9D39",
        yellow400: "#807415",
        yellow500: "#554B00",
       
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
