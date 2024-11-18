/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Merriweather'],      
    },
    fontSize: {
      'title-sm': ['15px', '10px'],
      'title-md': ['30px', '12px'],
      'title-lg': ['50px', '14px'],

      'globe-sm': ['8px', '12px'],
      'globe-md': ['14px', '22px'],
      'globe-lg': ['18px', '28px'],

      sm: ['10px', '15px'],
      md: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },

    extend: {
      animation: {
        push: 'push 1s linear infinite',
        bannermove: 'bannermove 15s linear infinite',
        bannermoveright: 'bannermoveright 15s linear infinite',
      },
      keyframes: {
        push: {
          '50%': { opacity: '0' },
          '100%': {  opacity: '1' },
        },
        bannermove: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-100%)'},
        },
        bannermoveright: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)'},
        },
      },
      fontFamily: {
        'gaming': ['var(--Press_Start_2P)'],
      },
      colors: {
        primary:  '#FDD171',
        secundary: '#F86F9C',
        tertiary: '#D13044',
        background: '#22d3ee',
        error: '#22d3ee',
        'accent-primary': '#22d3ee',
        'accent-secundary': '#22d3ee',
        'accent-Tertiary': '#22d3ee',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },      
    },
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',

      'icons': '40px',
      'icons-sm': '30px',

      'nav-sm': '40px',
      'nav-md': '65px',
      'nav-lg': '85px',

      'dialog-sm': '2.5em',
      'dialog-md': '0.5em',      
      'dialog-lg': '3rem',
      'dialog-xl': '4em',
      
      'clouds-md': '120px',
      'clouds-lg': '200px',

      'heart-md': '120px',
      'heart-lg': '150px',
    },

    screens: {
      'sm': {'min': '320px', 'max': '684px'},
      // => @media (min-width: 576px) { ... }
  
      'md': {'min': '685px', 'max': '899px'},
      // => @media (min-width: 960px) { ... }
      'lg': {'min': '900px', 'max': '1439px'},

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },


  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
