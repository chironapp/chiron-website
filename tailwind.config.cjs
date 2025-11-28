/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#6A1B9A',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
          950: '#38006b',
        },
      },
    },
  },
  plugins: [],
};
