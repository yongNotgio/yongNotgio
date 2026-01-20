export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: '#0f0f1a',
        darkCard: '#1a1a2e',
        darkBorder: '#2a2a40',
        accent: '#00d9ff',
        accentAlt: '#fbbf24',
        textMuted: '#a0a0b0',
        textLight: '#e0e0e8',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)',
        'section-gradient': 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
      },
    },
  },
  plugins: [],
};
