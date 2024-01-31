import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define your custom DaisyUI themes here
      daisyui: {
        themes: [
          {
            mytheme: { // Give a name to your custom theme
              primary: "#22d3ee",
              secondary: "#FEA23D",
              accent: "#B7C1C6",
              neutral: "#1c1917",
              "base-100": "#ffffff",
              info: "#0ea5e9",
              success: "#15803d",
              warning: "#ff0000",
              error: "#ef4444",
            },
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
