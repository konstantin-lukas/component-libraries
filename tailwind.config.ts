import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/theme";
import colors from "tailwindcss/colors";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|date-picker|input|radio|ripple|spinner|calendar|date-input|form|popover).js"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [nextui({
    defaultTheme: "light",
    defaultExtendTheme: "light",
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: colors.fuchsia[600],
            foreground: "white",
          },
        },
      }
    }
  }),
      require("tailwindcss-animate")
],
} satisfies Config;
