import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'pull👙 — HOOKUP • CONNECT • FUN',
  description: 'Meet adults, make connections, and enjoy dating with safety and respect at the centre.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
