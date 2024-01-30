import type { Config } from "tailwindcss";
import myDaisyUIThemes from "./daisyui-themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      daisyui: {
        themes: myDaisyUIThemes,
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
