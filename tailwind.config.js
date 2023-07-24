/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '310px',
      'sx': '330px',
      'sm': '520px',
      'md': '730px',
      'lg': '920px',
      'xl': '1230px',
      '2xl': '1540px',
    },
 
    extend: {
      // colors: {
      //   black: "#070707",
      //   white: "#fdfdfd",
      //   gray: "#2c2d2c",
      //   yellow: "#c0bc3f",
      //   green: "#50af52",
      //   greenShade: "#f1f9ee",
      //   darkGreen: "#387b3a",
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
