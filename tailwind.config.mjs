/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pf-bg': '#F0EBE3',
        'pf-text': '#1A1A1A',
        'pf-accent': '#7A6C5D',
        'pf-accent-light': '#9B8E7E',
        'pf-muted': '#B8B2A8',
        'pf-border': '#E5E2DC',
        'pf-surface': '#F0EDE8',
      },
      fontFamily: {
        'grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'serif-display': ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
      },
      letterSpacing: {
        'brutal': '-0.04em',
      },
      lineHeight: {
        'tight-display': '0.95',
      },
    },
  },
  plugins: [],
}
