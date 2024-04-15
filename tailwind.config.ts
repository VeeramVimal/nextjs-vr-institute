import type { Config } from 'tailwindcss';
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    // },
    extend: {
      fontFamily: {
        // add new font family
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: "transparent",
        primary: "#3761EE",
        textcolor: "#22314F",
        bordercolor: "#DADFF8",
        secondary: "#EE85B5",
        violet: "#883677",
        congo: "##FF958C",
        success: "#5FC790",
        warning: "#FFA600",
        danger: "#FF5630",
        dark: "#2E3A44",
        info: "#1CA7EC",
        // black: "#2E3A44",
        black: {
          200: "#2E3A44",
          500: "#4F5665",
          600: "#0B132A",
        },
        grey: {
          100: "#A0AABF",
          300: "#C0C6D4",
          500: "#E3E8F1",
        },
        // grey1: "#A0AABF",
        // grey2: "#C0C6D4",
        // grey3: "#E3E8F1",
        light: "#F9FBFC",
        white: {
          300: "#F8F8F8",
          500: "#fff",
        },
        blue: {
          100: "#A1A8CA"
        },
        ...defaultTheme.colors,
      },
    }
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
}
export default config
