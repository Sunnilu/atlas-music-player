// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← ADD THIS LINE
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        accent: '#F35A69',
        'bg-dark': '#1E1E2F',
        'text-light': '#F5F5F5',
        surface: '#292942',
      },
      fontFamily: {
        custom: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 4px 4px 0px #D5D7D840',
      },
    },
  },
  plugins: [],
};
