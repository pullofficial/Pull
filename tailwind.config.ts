import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { pull: { rose: '#f43f70', wine: '#641b3b', ink: '#21151b', blush: '#fff0f4' } } } },
  plugins: []
};
export default config;
