module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loader: "loader 2.5s infinite ease-in",
      },
      keyframes: {
        loader: {
          "0%": { width: "0%", left: "0", right: "0" },
          "50%": { width: "100%", left: "0", right: "0" },
          "99%": { width: "0%", left: "100%", right: "0" },
        },
      },
    },
  },
  plugins: [],
};
