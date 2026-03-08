import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'SnowShare',
  description: 'Find or offer help with snow removal in your community',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container mx-auto py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}