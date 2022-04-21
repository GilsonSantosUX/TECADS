module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    prefix: 'gs-',
    colors: {
        primary: {
          100: '#8b96ff',
          200: '#5e6cff',
          300: '#404eed',
          400: '#1a28bb',
          500: '#000133'
        },
        secondary: {
          100: '#93e6ae',
          200: '#62ca84',
          300: '#3ba55d',
          400: '#1e8640',
          500: '#012c0f'
        },
        tertiary: {
          100: '#d4dadc',
          200: '#818e92',
          300: '#314044',
          400: '#1b282c',
          500: '#080e10'
        },
        neutral:{
          100: '#e9e9e9',
          200: '#cccccc',
          300: '#999999',
          400: '#777777',
          500: '#666666',
          600: '#333333'
        },
        feedback:{
          informative: {
            100: '#8ecbff',
            200: '#60adf3',
            300: '#3f8ed6',
            400: '#1c69af',
            500: '#001d33'
          },
          negative: {
            100: '#f3b8b3',
            200: '#ec8a82',
            300: '#e45b50',
            400: '#a34139',
            500: '#220e0c'
          },
          warning: {
            100: '#f9dda8',
            200: '#f5c76e',
            300: '#f1b135',
            400: '#ad7f26',
            500: '#241b08'
          },
          positive: {
            100: '#bad6a4',
            200: '#8dbc69',
            300: '#22ff33',
            400: '#457321',
            500: '#0e1807'
        },
        },
        light: '#f9f9f9',
        dark: '#323232',
        white:'#fff',
        black:'#000'
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      accent: ['Open Sans', 'sans-serif'],
    },
    extend: {
      // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
