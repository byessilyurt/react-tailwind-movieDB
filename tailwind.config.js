module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2e6f95",
        secondary: "#1780a1",
        tertiary: "#caf0f8",
      },
    },
  },
  plugins: [require("daisyui")],
};
