module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bergner: {
          // mantenemos la clave 'red' para compatibilidad con clases existentes
          red: '#0B4A6F', // color principal: azul industrial
          dark: '#111827', // gris muy oscuro
          light: '#F4F6F8', // fondo claro técnico
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
