import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colhybri: {
          primary: '#00A878',
          secondary: '#FF6B35',
          dark: '#1A1A2E',
          light: '#FAFAF7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        zh: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        ja: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
