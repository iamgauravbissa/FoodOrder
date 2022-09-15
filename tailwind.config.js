/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'hero-pattern': "url('Asset/HeroImg.jpg')",
      }),
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      minHeight: {

        '1/2' : "50vh",
              }

    },
  },
  plugins: [],
}
