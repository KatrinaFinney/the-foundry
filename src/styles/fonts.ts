import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { Playfair_Display, Inter,  Cormorant_Garamond, Work_Sans } from 'next/font/google';

export const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-cormorant'
  });
  
  export const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-worksans'
  });
  

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair'
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter'
});


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

