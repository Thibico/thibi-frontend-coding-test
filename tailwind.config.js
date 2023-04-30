/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { sans: ['"Kantumruy Pro"', 'sans-serif'], padauk: ['Padauk', 'sans-serif'] },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        primary: '#3354F8',
        accent: '#2C2C2C',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|accent)/,
    },
  ],
};
