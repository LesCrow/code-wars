/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { pink: "#f38375" },
      backgroundImage: {
        index: "url('/src/Images/cool-background.png')",
        leaderBoard: "url('/src/Images/leaderBoardBG.png')",
      },
    },
  },
  plugins: [],
};
