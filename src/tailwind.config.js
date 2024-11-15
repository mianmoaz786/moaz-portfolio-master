/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               // Scan index.html file
    './src/**/*.{js,ts,jsx,tsx}', // Scan all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
