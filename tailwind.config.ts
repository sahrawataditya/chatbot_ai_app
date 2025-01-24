import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
          "2xl": "1440px",
        },
        padding: {
          DEFAULT: "1rem",
        },
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
