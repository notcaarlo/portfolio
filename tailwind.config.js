/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sauce Sans"', 'Inter', 'sans-serif'],
        display: ['"Open Sauce Two"', '"Open Sauce Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
