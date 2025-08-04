/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        
        dark: {
          background: '#121212',
          foreground: '#ffffff',
          card: '#111111',
          border: '#333333',
          muted: '#888888',
          accent: '#DDDDDD',
          primary: '#ffffff',
          secondary: '#888888',
          subtle: '#222222',
          hover: '#222222'
        }
      }
    },
  },
  plugins: [],
}