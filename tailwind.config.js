module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './safelist.txt',
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0 0 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'xl': '0 0 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 0 50px -12px rgb(0 0 0 / 0.25)'
      }
    },
    fontFamily: {
      'sans': ['proxima-nova', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [
    require('tailwind-safelist-generator')({
      patterns: [
        'text-{colors}',
        'border-{colors}',
        'bg-{colors}',
        'hover:border-{colors}',
        'hover:shadow-{colors}',
        'dark:text-{colors}',
        'dark:bg-{colors}',
      ],
    }),
  ],
};
