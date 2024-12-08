import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'almost-black': '#1A1A1A',
        primary: '#79BEE1',
        'primary-tint': {
          100: '#F0F8FC',
          200: '#E2F1F9',
          300: '#D4EBF6',
          400: '#C6E4F3',
          500: '#B9DDF0',
          600: '#ABD7ED',
          700: '#9ED1EA',
          800: '#92CAE7',
          900: '#85C4E3',
        },
        secondary: '#F2F2F7',
        success: '#34C759',
        danger: '#FF3B30',
        warning: '#FFCC00',
        gray: {
          100: '#F2F2F7',
          200: '#E5E5EA',
          300: '#D1D1D6',
          400: '#C7C7CC',
          500: '#AEAEB2',
          600: '#8E8E93',
          700: '#636366',
          800: '#48484A',
          900: '#3A3A3C',
        },
        yellow: '#FFCB45',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        asap: ['Asap', 'sans-serif'],
        'mukta-vaani': ['Mukta Vaani', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        md: '1rem',       // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem'      // 48px
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'scale-button': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slide-fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-delay': 'fade-in 0.5s ease-out 0.2s forwards',
        'fade-in-scroll': 'fade-in 0.5s ease-out forwards',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'scale-button': 'scale-button 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'slide-fade-in': 'slide-fade-in 0.8s ease-out forwards',
        'fade-in-delayed-1': 'fade-up 0.5s ease-out forwards 1.0s',  // After title
        'fade-in-delayed-2': 'fade-up 0.5s ease-out forwards 2.0s',  // After first line
        'fade-in-delayed-3': 'fade-up 0.5s ease-out forwards 2.0s',  // After second line
        'fade-in-delayed-4': 'fade-up 0.5s ease-out forwards 2.6s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config