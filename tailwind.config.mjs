/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1E2822',
          soft: '#4F6357',
          faint: '#8A9C91',
        },
        parchment: {
          DEFAULT: '#F5F3EB',
          surface: '#FFFFFF',
          card: '#FAF8F2',
          light: '#EEF5EA',
          overlay: '#E5EDE1',
          section: '#E2EBE2',
        },
        forest: {
          DEFAULT: '#2D6E44',
          pine: '#1B432A',
          light: '#E4EFE7',
          mint: '#4C9A66',
          muted: '#D4E0CE',
        },
        quest: {
          amber: '#D99026',
          gold: '#E5A93C',
          light: '#FBF3E4',
          warning: '#FFF9E6',
        },
        arcade: {
          red: '#CC4E46',
          redlight: '#FAECEB',
          danger: '#FFECEC',
          cyan: '#386B85',
          purple: '#7A4F88',
        },
        progress: {
          empty: '#D5DFD1',
        },
      },
      fontFamily: {
        pixel: ['PixelifySans', 'system-ui', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'hard-sm': '2px 2px 0px #1E2822',
        'hard': '3px 3px 0px #1E2822',
        'hard-md': '4px 4px 0px #1E2822',
        'hard-lg': '6px 6px 0px #1E2822',
        'arcade-btn': '0px 4px 0px #1E2822',
        'arcade-btn-active': '0px 0px 0px #1E2822',
        'hard-green': '4px 4px 0px #1B432A',
        'hard-amber': '4px 4px 0px #9C6314',
        'hard-red': '4px 4px 0px #8C2922',
      },
      borderWidth: {
        '2.5': '2.5px',
        '3': '3px',
      },
    },
  },
  plugins: [],
};
