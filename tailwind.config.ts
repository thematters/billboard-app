import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1104px",
    },
    colors: {
      black: "#333333",
      gray: "#b3b3b3",
      green: "#80AB01",
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        cyber: ["Saved By Zero", "Space Grotesk", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        beige: "#ede8d6",
        dim: "#212121",
        grass: "#c3f432",
        steam: "#dddddd",
      },
      minWidth: {
        main: "375px",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
} satisfies Config
