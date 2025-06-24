import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'RUNAKO',
  description: 'Langage de programmation simple, lisible et extensible',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center',
          padding: '1.5rem 2rem 1rem 2rem',
          background: '#f7f7f7',
          borderBottom: '1px solid #eee',
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: 0.5,
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}>
            <Image src="/logo.png" alt="Logo RUNAKO" width={90} height={72} style={{ marginRight: 8, transition: 'transform 0.4s cubic-bezier(.4,0,.2,1)', cursor: 'pointer' }} className="logo-animated" />
          </Link>
          <Link href="/" style={{ color: '#222', textDecoration: 'none' }}>Accueil</Link>
          <Link href="/documentation" style={{ color: '#222', textDecoration: 'none' }}>Documentation</Link>
          <Link href="/tutoriel" style={{ color: '#222', textDecoration: 'none' }}>Tutoriel</Link>
          <Link href="/exemples" style={{ color: '#222', textDecoration: 'none' }}>Exemples</Link>
          <Link href="/faq" style={{ color: '#222', textDecoration: 'none' }}>FAQ</Link>
          <Link href="/a-propos" style={{ color: '#222', textDecoration: 'none' }}>À propos</Link>
          <Link href="/contact" style={{ color: '#222', textDecoration: 'none' }}>Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
