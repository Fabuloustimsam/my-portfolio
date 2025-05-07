// tailwind.config.js
module.exports = {
  darkMode: 'class', // This enables the class-based dark mode
  // The rest of your Tailwind config...
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
theme: {
  extend: {
    colors: {
      gold: '#FFD700', // Add gold color to the palette
    },
    // Your theme extensions...
  },
},

    // Remove or complete this comment
  };