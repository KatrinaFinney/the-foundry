import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk'
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono'
});
