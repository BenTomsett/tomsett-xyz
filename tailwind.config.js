module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
      'sans': ['var(--font-bt)', 'ui-sans-serif', 'system-ui'],
    },
  },
  safelist: [
    { pattern: /from-(red|sky|green|yellow|purple)-600/ },
    { pattern: /to-(red|sky|green|yellow|purple)-400/ },
  ]
};
