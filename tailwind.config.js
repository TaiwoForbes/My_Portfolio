/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'black': '#111111',
        'mid-black': '#101010',
        'gray-black': '#121212',
        'graish-black': '#161616',
        'ash-black': '#1A1A1A',
        'blackish': '#9F9F9F',
        'grey': '#202020',
        'blk': '#3A3A3A',
        'blke': '#FF9B50',
        
      },
      
      fontFamily: {
        montserat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'contact': '30% 50%',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
      
    },
  },
  plugins: [],
}