/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      colors: {
        background: 'rgb(var(--color-background))',
        surface: 'rgb(var(--color-surface))',
        text: 'rgb(var(--color-text))',
        'text-muted': 'rgb(var(--color-text-muted))',
        border: 'rgb(var(--color-border))',
        'red-accent': 'var(--color-red-accent)',
        primary: 'rgb(var(--color-primary))',
        'primary-hover': 'rgb(var(--color-primary-hover))',
        'primary-active': 'rgb(var(--color-primary-active))',
        heading: 'rgb(var(--color-heading))',
        subheading: 'rgb(var(--color-subheading))',
        'red-700': 'rgb(var(--color-red-700))',
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', '1.2'],
        'subhero': ['clamp(1.25rem, 3vw, 1.5rem)', '1.4'],
        'heading': ['clamp(1.875rem, 4vw, 2.25rem)', '1.3'],
        'subheading': ['1.125rem', '1.5'],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'element': 'clamp(1rem, 2vw, 2rem)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}