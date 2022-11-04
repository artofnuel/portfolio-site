/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C778DD',
        'gray': '#ABB2BF',
        'background': '#0f1114'
      }
    },
  },
  plugins: [],
}
