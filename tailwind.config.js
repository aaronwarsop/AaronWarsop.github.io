/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {  //3b82f680
        'heading-col': '#CCD6F4',
        'text-col': '#8892b0',
        'custom-blue': '#4986FF',
        'hovercol': '#535bf2',
      }
    },
  },
  plugins: [],
}

