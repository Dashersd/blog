import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInit from '@/components/AOSInit';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Helman Dacuma - BSIT Student Portfolio & Blog',
  description: 'Personal IT Dashboard - Explore my journey, projects, research, and blog posts as a BSIT student.',
  keywords: ['portfolio', 'BSIT', 'web development', 'UI/UX design', 'blog'],
  authors: [{ name: 'Helman Dashelle M. Dacuma' }],
  openGraph: {
    title: 'Helman Dacuma - BSIT Student Portfolio & Blog',
    description: 'Personal IT Dashboard - Explore my journey, projects, research, and blog posts.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <AOSInit />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

