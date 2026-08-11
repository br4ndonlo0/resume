import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        foreground: "var(--text-main)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
        border: "var(--border)",
        card: "var(--card-bg)"
      },
    },
  },
  plugins: [],
};
export default config;
