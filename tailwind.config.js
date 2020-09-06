/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend:{
      width: {
         '1/7': '14.2857143%',
         '2/7': '28%',
         '3/7': '42.8571429%',
         '4/7': '57.1428571%',
         '5/7': '71.4285714%',
         '6/7': '85.7142857%',
      }
    },
    backgroundColor: {
      'white': '#ffffff',
      'primary': '#FF9F0E',
      'darkGrey': '#484848',
      'black': '#000000'
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
       '50%': '50%',
       '16': '4rem',
       '90': '60rem'
    },
    textColor: {
      'white': '#ffffff',
      'primary': '#FF9F0E',
      'grey': '#e2e8f0'
    },
    borderRadius: {
      'none': '0',
       'sm': '0.125rem',
       default: '0.25rem',
       default: '4px',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'large': '12px',
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
