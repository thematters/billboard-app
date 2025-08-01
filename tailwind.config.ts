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
          10: '#C3F432',
          20: '#86B402',
          30: '#4A5B19',
        },
        yellow: {
          10: '#FDEC6B',
          20: '#C5B32B',
          30: '#433E11',
        },
        purple: {
          10: '#FA9EFF',
          20: '#A14EA6',
          30: '#4C144E',
        },
        red: {
          10: '#FF8F91',
          20: '#B0494B',
          30: '#441718',
        },
        blue: {
          10: '#72AAFD',
          20: '#346EC4',
          30: '#132B4E',
        },
        gray: {
          10: '#D8D9DA',
          30: '#A9B2BB',
          50: '#7A828B',
          70: '#4F5963',
          80: '#2F353B',
          90: '#202124',
        },
      },
      screens: {
        drawer: '390px',
      },
      maxWidth: {
        header: '1920px',
        footer: '1240px',
        main: '1240px',
        drawer: '390px',
        modal: '375px',
        form: '440px',
        uploader: '400px',
        agreement: '960px',
      },
      minWidth: {
        main: '375px',
        footer: '375px',
        agreement: '375px',
      },
    },
  },
  plugins: [],
}
