module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bergner: {
          red: '#E54F20', // Rojo/Naranja de la marca (Accent)
          blue: '#004481', // Azul corporativo (Primary)
          dark: '#111827',
          light: '#F4F6F8',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
