/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
        orbitron: 'var(--font-orbitron)',
      },

      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
          logo: '#8246ff',
        },
      },

      fontSize: {
        '5xl': '2.5rem',
      },

      dropShadow: {
        'main-photo': '0 16px 8px rgba(129, 70, 255, 0.8)',
        home: '0 0 1rem rgba(129, 70, 255, 0.8)',
      },

      keyframes: {
        blurAnimation: {
          from: {
            transform: 'translate(0, 120px)',
            filter: 'blur(33px)',
            opacity: '0',
          },
          to: { transform: 'translate(0)', filter: 'blur(0)', opacity: '1' },
        },
        mainPhoto: {
          '0%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { 'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(16px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },

      animation: {
        h1_entry: 'blurAnimation .9s ease-in-out 1 forwards',
        h3_entry: 'blurAnimation .9s ease-in-out .4s 1 forwards',
        text_entry: 'blurAnimation .9s ease-in-out .8s 1 forwards',
        mainPhoto: 'mainPhoto 5s ease-in-out infinite',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')],
}
