/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,tsx}'
  ],
  theme: {
    fontFamily:{
      sans: ['"Kumbh sans"', 'sans-serif']
    },
    fontSize:{
      p: "16px"
    },
    extend: {
      colors:{
        orange: "#ff7d1a",
        paleOrange:"#ffede0",
        vDarkBlue:"#1d2025",
        dGrayishBlue:"#68707d",
        grayishBlue:"#b6bcc8",
        lGrayishBlue:"#f7f8fd",
      }
    },
  },
  plugins: [],
}

