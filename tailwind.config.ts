import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-pattern': "url('/cardBG.jpg')",
        'contact': "url('/contact.png')",
      },
      brightness: {
      60: '.6',
       
      },
      colors: {
        'light-gray':' #EDEDED',
      },
      fontSize: {
        '7.5xl' : ['64px', {
          lineHeight: '100%',
          letterSpacing: '0.00em',
          fontWeight: '400',
        }],
        '18xl': ['250px', {
          lineHeight: '70%',
          letterSpacing: '0.00em',
          fontWeight: '400',
        }],
       
      },
      dropShadow: {
        'text-shadow': '0 4px 15px   rgba(255, 255, 255, 0.83)',
        'imgAbout' : '0 4px 20px   rgba(237, 237, 237, 0.2)',
        'flipCard' : '0 4px 10px   rgba(245, 245, 245, 0.31)',
      }
    },
  },
  plugins: [],
};
export default config;
