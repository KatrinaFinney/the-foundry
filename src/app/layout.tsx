import './globals.css';
import { cormorant, workSans } from '@/styles/fonts';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'The Foundry – by WebTriage',
  description: 'Strategic website builds, crafted with clarity and intention.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${workSans.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/foundry-hero-compressed.jpg"
          type="image/jpeg"
        />
      </head>
      <body>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
