module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  theme: {
    extend: {
      colors: {
        black: '#22292f',
        grey: {
          dark: '#8795a1',
          darkest: '#3d4852',
        },
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
