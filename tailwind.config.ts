/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        orange: {
          50: '#ffefeb',
          100: '#ffccc2',
          200: '#ffb4a4',
          300: '#ff927b',
          400: '#ff7d61',
          500: '#ff5c3a',
          600: '#e85435',
          700: '#b54129',
          800: '#8c3320',
          900: '#6b2718',
        },
        yellow: {
          50: '#fff9ec',
          100: '#ffebc4',
          200: '#ffe2a7',
          300: '#ffd47f',
          400: '#ffcc66',
          500: '#ffbf40',
          600: '#e8ae3a',
          700: '#b5882d',
          800: '#8c6923',
          900: '#6b501b',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },

      fontSize: {
        '5xl': '2.5rem',
      },

      maxWidth: {
        '1920': '120rem',
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
      },

      animation: {
        h1_blurAnimation: 'blurAnimation .8s ease-in-out 1 forwards',
        h3_blurAnimation: 'blurAnimation .8s ease-in-out .3s 1 forwards',
        text_blurAnimation: 'blurAnimation .8s ease-in-out .6s 1 forwards',
        mainPhoto: 'mainPhoto 5s ease-in-out 4s infinite',
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')],
}
