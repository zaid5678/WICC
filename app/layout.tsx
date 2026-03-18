import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Westminster Islamic Community Centre | WICC',
  description:
    "The Westminster Islamic Community Centre (WICC) — empowering the community, rooted in faith. Friday prayers, Eid Salah, Islamic education and community events in London SW1V.",
  keywords: "WICC, Westminster Islamic Community Centre, mosque, Jumu'ah, Eid, Islamic education, London",
  openGraph: {
    title: 'Westminster Islamic Community Centre | WICC',
    description: 'Empowering the Community. Rooted in Faith.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
