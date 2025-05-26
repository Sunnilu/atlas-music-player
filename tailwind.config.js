// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',     // Blue
        accent: '#F35A69',      // Coral
        'bg-dark': '#1E1E2F',   // Deep navy
        'text-light': '#F5F5F5',
        'surface': '#292942'
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem'
      },
      fontFamily: {
        custom: ['"Poppins"', 'sans-serif']
      },
      boxShadow: {
        custom: '0px 4px 4px 0px #D5D7D840',
      }
    },
  },
  plugins: [],
}
