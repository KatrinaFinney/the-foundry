import './globals.css';
import { spaceGrotesk, ibmPlexMono } from '@/styles/fonts';

export const metadata = {
  title: 'The Foundry – by WebTriage',
  description: 'Strategic website builds, crafted with clarity and intention.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/foundry-hero-compressed.jpg"
          type="image/jpeg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
