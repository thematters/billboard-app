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
      green: "#80AB01",
      white: '#ffffff',
    },
    extend: {
      borderRadius: {
        "btn": '4rem',
      },
      colors: {
        "beige": "#EDE8D6",
        "gradient-green": "#2F3E07",
        "dim-black": "#212121",
        "light-grey": "#DDDDDD",
        "light-green": "#C3F432",
      },
      fontFamily: {
        "cyber": ["Saved By Zero", "Space Grotesk", "sans-serif"],
        "space": ["Space Grotesk", "sans-serif"],
      },
      minWidth: {
        "device": "375px",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
} satisfies Config
