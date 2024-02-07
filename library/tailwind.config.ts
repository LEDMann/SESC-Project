import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FFFB',
          hover: '#79FFFD'
        },
        secondary: {
          DEFAULT: '#DBFFFD',
          dark: '#1e1b4b'
        },
        accent: {
          DEFAULT: '#ff007b'
        },
        icon: {
          DEFAULT: '#20bbac'
        }
      },
      fontFamily: {
        'sans': ['Roboto']
      },
    },
  },
  plugins: [
  ],
};
export default config;
