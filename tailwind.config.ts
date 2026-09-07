import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        paper: '#F4F8F4',
        surface: '#FFFFFF',
        ink: '#14321F',
        graphite: '#1E4A2E',
        line: '#DDE8DC',
        sage: '#E6F0E6',
        sageStrong: '#C8DCC2',
        flame: '#E86A1E',
        ember: '#FF8C2E',
        cream: '#FFF7ED',
        muted: '#5A6B5A',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Archivo', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.24em',
      },
    },
  },
  plugins: [],
} satisfies Config
