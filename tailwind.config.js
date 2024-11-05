/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '16px',
        },
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],
        'Syne': ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'room-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) -6.78%, #000000 188.98%)',
      }
    },
  },
  plugins: [],
}

