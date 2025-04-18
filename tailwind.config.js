/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      backgroundImage: {
        'wave-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCwwIEw1MCwwIEM3NSwwIDc1LDEwMCA1MCwxMDAgTDI1LDEwMCBDMCwxMDAgMCw1MCAyNSw1MCBaIiBmaWxsPSIjZmJiZjI0IiBvcGFjaXR5PSIwLjAzIiAvPjwvc3ZnPg==')",
      },
      colors: {
        yellow: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        }
      }
    },
  },
  plugins: [],
};