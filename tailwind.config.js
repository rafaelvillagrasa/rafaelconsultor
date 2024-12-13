/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000',
          secondary: '#0A0A0A',
          accent: '#141414',
          card: '#1A1A1A'
        },
        apple: {
          blue: '#0A84FF',
          purple: '#BF5AF2',
          pink: '#FF2D55',
          green: '#32D74B',
          orange: '#FF9F0A',
          gray: {
            100: '#F5F5F7',
            200: '#E5E5E7',
            300: '#D5D5D7',
            400: '#B5B5B7',
            500: '#959597',
            600: '#757577',
            700: '#555557',
            800: '#353537',
            900: '#151517'
          }
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}