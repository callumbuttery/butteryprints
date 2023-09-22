/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.35)',
          '0 45px 65px rgba(0, 0, 0, 0.25)'
        ]
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        'me-ai': "url('IMG_9378-ai-2.jpg')",
        'headshot1': "url('/headshots/unnamed.jpg')",
        'headshot2': "url('/headshots/unnamed (1).jpg')",
        'headshot3': "url('/headshots/unnamed (2).jpg')",
      }
    },
  },
  plugins: [],
}
