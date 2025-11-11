/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
      colors: {
        Bg_Primary: ' var(--primary-background-color)',
        Bg_secondary: ' var(--secondary-background-color)',
        primary: 'var(--primary-color)',
      },
    },
  },
  plugins: [],
}

