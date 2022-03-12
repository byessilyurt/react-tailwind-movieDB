module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: "#f2f2f2",
        tertiary: "#f3f3f3",
      },
    },
  },
  plugins: [require("daisyui")],
};
