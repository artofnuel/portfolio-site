/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#333333',
        'secondary': '#ffffff',
        'gray': '#D6D6D6',
        'background': '#ffffff'
      }
    },
  },
  plugins: [],
}
