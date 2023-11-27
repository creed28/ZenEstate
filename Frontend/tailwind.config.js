/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    colors: {
      'primary-grey': '#eaeaea',
      'text-color': '#2c2d32'
    },
    boxShadow: {
      1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
  },
  plugins: [],
}