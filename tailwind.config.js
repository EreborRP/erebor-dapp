module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#191919',
        'blue-primary': '#052465',
        'blue-secondary': '#1B3B80',
        'gold-primary': '#FDB501',
        'gold-secondary': '#FED600',
        'gray': '#808080'
      },
      keyframes: {
        rotateY3D: {
          '100%': { transform: 'rotate3d(0, 1, 0, 360deg);' },
        },
        shake: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg);' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg);' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg);' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg);' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg);' },
          '100%': { transform: 'translate(1px, -2px) rotate(-1deg);' },
        }
      },
      animation: {
        'rotateY3D': 'rotateY3D 3s infinite',
        'shake': 'shake 0.3s',
        'flip': 'rotateY3D 1.5s',
      }
    },
  },
  plugins: [],
}
