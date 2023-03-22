module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raisonne': ['var(--font-raisonne)']
      },
      colors: {
        'primary': 'rgb(20 22 26)',
        'secondary': 'rgb(20 22 26 / 0.9)'
      },
      transitionDuration: {
        '400': '400ms',
      },
      margin: {
        '110': '30rem',
        '128': '40rem',
        '136': '48rem',
        '162': '62rem',
        '174': '68rem',
        '180': '75rem',
      },
      spacing: {
        '88': '22rem'
      },
      backgroundImage: {
        'progress-gradient': 'linear-gradient(to right, rgb(255,211,61), rgb(234,74,170) 17%, rgb(179,75,255) 34%, rgb(1,254,255) 51%, rgb(255,211,61) 68%, rgb(234,74,170) 85%, rgb(179,75,255))',
      },
      keyframes: {
        'progress-animation': {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '0' }
        }
      },
      animation: {
        'progress': 'progress-animation 2s linear infinite',
      },
      backgroundSize: {
        length: '300% 100%'
      }
    },
  },
  plugins: [],
}
