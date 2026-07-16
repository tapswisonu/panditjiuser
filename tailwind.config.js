/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        kumkum:  '#C62828',
        haldi:   '#F4B400',
        saffron: '#FF8F00',
        sand:    '#FFF8EE',
        gold:    '#D4AF37',
        brown:   '#5D4037',
        lotus:   '#FDECEC',
        'deep-brown': '#3E2723',
        'light-gold': '#FDF3DC',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'gold': '0 8px 32px rgba(212,175,55,0.25)',
        'red':  '0 8px 32px rgba(198,40,40,0.20)',
        'divine': '0 20px 60px rgba(93,64,55,0.15)',
        'card':   '0 4px 24px rgba(93,64,55,0.08)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-r':    'floatReverse 7s ease-in-out infinite',
        'breathe':    'breathe 4s ease-in-out infinite',
        'glow':       'glowPulse 2.5s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'diya':       'divaGlow 2s ease-in-out infinite',
        'spin-slow':  'spin-slow 30s linear infinite',
        'petal':      'petalFall 8s linear infinite',
        'light-ray':  'lightRay 8s ease-in-out infinite',
      },
      keyframes: {
        float:        { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-14px) rotate(3deg)' } },
        floatReverse: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(12px) rotate(-4deg)' } },
        breathe:      { '0%,100%': { transform: 'scale(1)', opacity: '0.8' },   '50%': { transform: 'scale(1.08)', opacity: '1' } },
        glowPulse:    { '0%,100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.6)' } },
        fadeUp:       { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        divaGlow:     { '0%,100%': { filter: 'drop-shadow(0 0 4px #FF8F00)' }, '50%': { filter: 'drop-shadow(0 0 16px #F4B400)' } },
        petalFall:    { '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' }, '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' } },
        lightRay:     { '0%,100%': { opacity: '0.03' }, '50%': { opacity: '0.08' } },
        'spin-slow':  { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
      },
      backgroundImage: {
        'divine-gradient': 'linear-gradient(135deg, #C62828 0%, #FF8F00 50%, #F4B400 100%)',
        'temple-gradient': 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #6D4C41 100%)',
        'gold-gradient':   'linear-gradient(135deg, #D4AF37 0%, #FF8F00 100%)',
        'lotus-gradient':  'linear-gradient(180deg, #FFF8EE 0%, #FDECEC 100%)',
      },
    },
  },
  plugins: [],
}
