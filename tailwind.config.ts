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
          // New brand palette (revitalization positioning)
          teal: '#008080',
          gold: '#D4A843',
          cream: '#FAFAF8',
          dark: '#1A1A2E',
          success: '#2D8C4E',
          danger: '#CC3333',
          gray: '#666666',
          // Legacy aliases kept for backward compat with existing SEO pages.
          // primary/secondary now point at the new teal/gold to avoid visual drift.
          primary: '#008080',
          secondary: '#D4A843',
          light: '#FAFAF8',
        },
      },
      fontFamily: {
        // Editorial serif for titles
        display: ['Fraunces', 'Georgia', 'serif'],
        // Clean humanist sans for body copy
        sans: ['"DM Sans"', 'Inter', 'Noto Sans SC', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        // Monospace for data / counters
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        zh: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        ja: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wing-flap': 'wingFlap 0.6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wingFlap: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.25)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
