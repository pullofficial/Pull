import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'pull👙 — HOOKUP • CONNECT • FUN',
  description: 'Meet adults, make connections, and enjoy dating with safety and respect at the centre.',
  applicationName: 'pull',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'pull',
    statusBarStyle: 'default'
  }
};

export const viewport: Viewport = {
  themeColor: '#641b3b',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
