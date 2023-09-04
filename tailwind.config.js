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
      "discord-glow": "0 0 20px 5px #6A5ACD",
    },
    dropShadow: {
      "text-glow": "0 0 20px 5px #0066FF",
      "image-glow": "0 0 20px 1px #0062F5",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': {
          'bg': '#15161E',
        }
      },
    },
  },
  plugins: [],
}
