import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          0: "#000000",
          10: "#014539",
          20: "#025B4A",
          30: "#027560",
          40: "#03967B",
          50: "#03A587",
          60: "#35B79F",
          70: "#56C3AF",
          80: "#8BD6C8",
          90: "#B1E3DA",
          95: "#E6F6F3",
          100: "#FFFFFF",
        },
        secondary: {
          0: "#000000",
          10: "#1D2542",
          20: "#263056",
          30: "#313E6F",
          40: "#3F4F8F",
          50: "#45579D",
          60: "#6A79B1",
          70: "#828EBD",
          80: "#A9B2D2",
          90: "#C5CBE1",
          95: "#ECEEF5",
          100: "#FFFFFF",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;
