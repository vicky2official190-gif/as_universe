/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        app: {
          bg: '#131520',
          card: '#1c1f2e',
          border: '#2a2d3d',
          purple: '#6d6aff',
          green: '#00d285',
          cyan: '#00b4d8',
          accent: '#818cf8'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
}