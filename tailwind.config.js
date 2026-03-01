/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E5A3C',
          50: '#E6F2ED',
          100: '#CCE5DB',
          200: '#99CCB7',
          300: '#66B293',
          400: '#33996F',
          500: '#0E5A3C',
          600: '#0B4830',
          700: '#083624',
          800: '#062418',
          900: '#03120C',
        },
        gold: {
          DEFAULT: '#C9A227',
          50: '#FBF7EA',
          100: '#F7EFD5',
          200: '#EFDFAB',
          300: '#E7CF81',
          400: '#DFBF57',
          500: '#C9A227',
          600: '#A1821F',
          700: '#796217',
          800: '#514110',
          900: '#282108',
        },
        accent: '#C9A227',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
