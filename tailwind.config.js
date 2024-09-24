/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pops: ['Poppins', 'sans-serif',]
    },
    maxWidth:{
      Container:"1140px"
    },
    backgroundImage: {
      'hero-pettern': "url('/src/assets/banner.jpg')", // Kept the typo as 'hero-pettern'
      'profile': "url('/src/assets/profile.jpg')",     // Removed extra colon at the end of the value
    }
    },
  },
  plugins: [],
}

