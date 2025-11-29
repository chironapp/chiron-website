/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#8e24aa',
          600: '#6A1B9A',
          700: '#5c1687',
          800: '#4a148c',
          900: '#38006b',
          950: '#2a0050',
        },
      },
    },
  },
  plugins: [],
};
