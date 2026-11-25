import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'pull👙 — HOOKUP • CONNECT • FUN',
    short_name: 'pull',
    description: 'Meet adults, make connections, and enjoy dating with safety and respect at the centre.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff9fb',
    theme_color: '#641b3b',
    categories: ['social', 'lifestyle'],
    icons: [
      { src: '/pull-icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
    ]
  };
}
