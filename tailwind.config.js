/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        lg: { max: "1024px" },
        navmd: { max: "870px" },
      },
      boxShadow:{
        '4xl':'0px 1.39px 2.78px 0px #ABBED133',
        '5xl': '0px 8px 16px 0px #ABBED166'
      }

    },
  },
  plugins: [],
};
