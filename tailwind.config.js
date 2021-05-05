const _ = require('lodash');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '430px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        sans: [
          '"Karla"',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          '"Source Serif Pro"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme}) {
      const breakpoints = _.map(theme('screens'), (value, key) => {
        return {
          [`@media (min-width: ${value})`]: {
            '.breakpoint::before': {
              content: `"${key}"`,
            }
          }
        }
      })
      addBase(breakpoints)
    })
  ],
}
