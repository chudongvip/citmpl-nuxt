module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 自定义主题
        anyrtc: {
          gray_300: '#989898',
          gray_800: '#18191d',
          blur_200: '#29B9FF',
          blue_300: '#4399f8',
          blue_400: '#1283ff',
        },
      },
      spacing: {
        30: '7.5rem',
        120: '30rem',
        125: '31.25rem',
        150: '37.5rem',
      },
      // fontFamily: {
      //   sans: ['family_light']
      // }
      // fontSize: {

      // }
    },
    screens: {
      '2xl': { min: '1280px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
