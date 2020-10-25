module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  corePlugins: {
    outline: false,
  },
  theme: {
    extend: {
      outline: {
        blue: ['none', 'none'],
      }
    },
    colors: {
      primary: {
        lighter: '#70c4bc',
        default: '#4db6ac',
        dark: '#357f78',
      },
      black: '#000',
      white: '#fff',
    },
  },
  variants: {
    outline: ['responsive'],
  },
  plugins: [],
};
