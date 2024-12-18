/** @type {import('tailwindcss').Config} */
import { colors } from './src/theme/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(3, 18, 56, 0.12)',
        'luxury-lg': '0 10px 30px -3px rgba(3, 18, 56, 0.15)',
        'gold': '0 4px 20px -2px rgba(218, 165, 32, 0.2)',
        'gold-lg': '0 10px 30px -3px rgba(218, 165, 32, 0.25)',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #031238 0%, #082b82 50%, #0c3dad 100%)',
        'gold-gradient': 'linear-gradient(135deg, #daa520 0%, #b88a1b 50%, #956f16 100%)',
      },
    },
  },
  plugins: [],
};