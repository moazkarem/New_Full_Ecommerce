import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  
    extend: {  colors: {
      primary: "#FF7F33",
      darkprim:'#FBBA3C',
      header:"#F3F3F3",
      describtion:"#2C2828",
      descdark:'#E3E3E3',
      btnbg:"#F28A1A",
      cardbg:"#0F1111"
    },},
  },
  plugins: [daisyui],
};
