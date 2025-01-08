module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'light-move': 'lightMove 15s linear infinite',
      },
      backgroundSize: {
        '200': '200% 100%',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
