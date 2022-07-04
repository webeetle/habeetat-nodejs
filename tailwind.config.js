module.exports = {
  darkMode: 'class',
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#4bb9ab',
      'secondary': '#EF85B4'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#4bb9ab',
      'secondary': '#EF85B4'
    }),
    fontFamily: {
      sans: ['Lato', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
}
