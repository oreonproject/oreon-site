/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./downloads/**/*.html", 
    "./docs/**/*.html", 
    "./help/**/*.html", 
    "./our-team/**/*.html", 
    "./oreon-10/**/*.html", 
    "./oreon-lime-r2/**/*.html", 
    "./oreon-10-support-timeline/**/*.html", 
    "./oreon-lime-r2-support-timeline/**/*.html", 
    "./404.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'redhat': ['Red Hat Display', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'cardo': ['Cardo', 'serif'],
      },
      colors: {
        'aurora': {
          50: '#f0fdfa',
          100: '#ccfdf7',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        'oreon': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
      oreon: {
        "primary": "#14b8a6",
        "secondary": "#0d9488",
        "accent": "#2dd4bf",
        "neutral": "#1f2937",
        "base-100": "#ffffff",
        "base-200": "#f9fafb",
        "base-300": "#f3f4f6",
        "base-content": "#111827",
        "info": "#5eead4",
        "success": "#10b981",
        "warning": "#f59e0b",
        "error": "#ef4444",
        "--animation-btn": "0s",
        "--animation-input": "0s",
        "--btn-focus-scale": "1",
      },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
