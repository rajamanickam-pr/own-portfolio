module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-start': '#06b6d4',
        'primary-end': '#7c3aed',
        'bg': '#ffffff',
        'bg-2': '#f8fafc',
        'text': '#0f172a',
        'muted': '#64748b',
        'card-border': 'rgba(15,23,42,0.06)'
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', '"Helvetica Neue"', 'Arial']
      }
    }
  },
  plugins: [],
}
