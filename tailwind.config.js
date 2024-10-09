/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.5': '0.125rem', // Custom value for p-0.5 (2px)
      },
    },
  },
  plugins: [],
}
