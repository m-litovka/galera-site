/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99eefd',
          300: '#5ddefa',
          400: '#06c5f0',
          500: '#00b4d8',
          600: '#0090b6',
          700: '#077394',
          800: '#0f5f79',
          900: '#134e66',
        }
      }
    },
  },
  plugins: [],
};
