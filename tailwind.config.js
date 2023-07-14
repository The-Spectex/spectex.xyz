/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      "nav-glow": "0 0 20px 5px #44A5FF",
      "button-glow": "0 0 20px 5px #0062F5",
      "panel-glow": "0 0 30px 1px #00C2FF",
    },
    dropShadow: {
      "text-glow": "0 0 20px 5px #0066FF",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': {
          'background-start': '#0C1016',
          'background-mid': '#0B0F14',
          'background-stop': '#0D1117',
          'nav-color': '#182A59',
          'nav-glow': '#44A5FF',
          'button-primary': '#043ED6',
          'text-green': '#00F981',
          'text-teal': '#00E8DA',
          'panel-bg': '#39424F',
        }
      },
    },
  },
  plugins: [],
}
