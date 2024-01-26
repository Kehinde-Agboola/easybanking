/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#2d314d",
        Lime: "#31d35c",
        Cyan: "#2bb7da",
        Grayish: "#9698a6",
        LightBlue: "#f3f4f6",
        LightGray: "#fafafa",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
