/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Tilt: ["Tilt Warp", "cursive"],
        Prompt:["Prompt", "sans-serif"]
       },
    },
  },
  plugins: [],
}
