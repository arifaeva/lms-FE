import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
};

export default config;
