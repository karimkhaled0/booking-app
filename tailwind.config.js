/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fasthand: ["Fasthand", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
