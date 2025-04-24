export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '578px',
      md: '768px',
      ml: '904px',
      lg: '981px',
    },
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        base: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#121316',
        green: {
          100: '#C3F432',
          200: '#86B402',
          300: '#4A5B19',
        },
        yellow: {
          100: '#FDEC6B',
          200: '#C5B32B',
          300: '#433E11',
        },
        purple: {
          100: '#FA9EFF',
          200: '#A14EA6',
          300: '#4C144E',
        },
        red: {
          100: '#FF8F91',
          200: '#B0494B',
          300: '#441718',
        },
        blue: {
          100: '#72AAFD',
          200: '#346EC4',
          300: '#132B4E',
        },
        gray: {
          100: '#D8D9DA',
          300: '#A9B2BB',
          500: '#7A828B',
          700: '#4F5963',
          800: '#2F353B',
          900: '#202124',
        },
      },
      screens: {
        drawer: '390px',
      },
      maxWidth: {
        header: '1920px',
        footer: '1302px',
        main: '1302px',
        drawer: '389px',
        modal: '375px',
      },
      minWidth: {
        main: '375px',
      },
    },
  },
  plugins: [],
}
