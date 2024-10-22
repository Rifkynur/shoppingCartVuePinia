/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#aeaeae',
        primary: '#519872',
        secondary: '#88C273',
      },
    },
  },
  plugins: [],
}
