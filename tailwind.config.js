/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        yeseva: ['Yeseva One', 'cursive'],
        raleway: ["Raleway", "cursive"],
        aclonica: ["Aclonica", "cursive"],
      },
      colors: {
        gold: '#bf9410', // Define the custom gold color
        blue: "#32506d",
        primary: "#0088ff",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
