/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-width': '600px', // Ancho personalizado 
      },
      height: {
        'custom-height': '80px', // Alto personalizado
      },
    },
  },
  plugins: [],
}