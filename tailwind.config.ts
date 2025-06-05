// tailwind.config.ts
import { type Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}", // Scan all TS/TSX files in src/
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#f5f5f5",
        destructive: "#ef4444",
      },
    },
  },
  plugins: [],
}

export default config
