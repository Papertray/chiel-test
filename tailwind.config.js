/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#00c1af',
        orange: '#ffb247',
        primary: '#2138df',
      },
    },
  },
}
